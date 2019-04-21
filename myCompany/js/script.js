//В меню отслеживаем нажатие и передаем функции
menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav') //Передаем  значение myTopnav переменной х

 if (x.className === 'topnav') {    //если значение х идентично topnav
    x.className += ' responsive'; //то добавляем класс responsive
 } else {
   x.className = 'topnav';  //если не идентично то  передаем значение topnav
 }
}
