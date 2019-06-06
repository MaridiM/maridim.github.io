
<?php

$to = "maridim92@gmail.com"; //На эту почту отправлются сообщения
$theme = "Заказ суши на дом."; //Тема сообщения

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$adress = trim($_POST["adressStreet"]);

/*Создаем сообщение с контактами пользователя*/
	$message = "
		Заказ №...
		Имя: $name <br>
		Номер телефона:  $phone <br>
		ЗАКАЗ <br>
		... <br>
		... <br>
		... <br>
		... <br>
		... <br>
		CУМА ... грн <br>
		Адресс доставки:  $address <br> 
		Время заказа: ";

    /*Задаем формат  для  сообщения для  крилицы, и UTF-8*/
	$header = 'MIME-Version: 1.0' . "\r\n" .
		"Content-type: text/html; charset=utf-8" . "\r\n";

	mail($to, $theme, $message, $header); //Отправляем само сообшение на почту


?>
