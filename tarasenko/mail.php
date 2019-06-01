<?php
  //Если форма отправлена
	if(isset($_POST['send'])) {
	 //Проверка Поля ИМЯ
		if(trim($_POST['name']) == '') {
			$hasError = true;
		} else {
			$name = trim($_POST['name']);
		}
		//Проверка поля ТЕМА
		if(trim($_POST['subject']) == '') {
			$hasError = true;
		} else {
			$subject = trim($_POST['subject']);
		}
		//Проверка правильности ввода EMAIL
		if(trim($_POST['email']) == '')  {
			$hasError = true;
		} else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
			$hasError = true;
		} else {
			$email = trim($_POST['email']);
		}
		//Проверка наличия ТЕКСТА сообщения
		if(trim($_POST['message']) == '') {
			$hasError = true;
		} else {
		if(function_exists('stripslashes')) {
			$comments = stripslashes(trim($_POST['message']));
		} else {
			$comments = trim($_POST['message']);
		}
	}
	//Если ошибок нет, отправить email
		if(!isset($hasError)) {
			$emailTo = 'name@yourdomain.com'; //Сюда введите Ваш email
			$body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nComments:\n $comments";
			$headers = 'From: My Site <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
			mail($emailTo, $subject, $body, $headers);
			$emailSent = true;
		}
?>