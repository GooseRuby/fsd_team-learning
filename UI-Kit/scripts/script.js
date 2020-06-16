"use strict";

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
/*window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/

function PlusFunction(sub,num,add) {
  let kolvo = document.getElementById(num).innerHTML;

  if (kolvo < 10) {
    kolvo++;
    document.getElementById(num).innerHTML = kolvo;
  }

  if (kolvo == 10){
    document.getElementById(add).style.visibility = 'hidden';
  }

  if (kolvo > 0) {
    document.getElementById(sub).style.visibility = 'visible';
  }
}

function MinusFunction(sub,num,add) {
  let kolvo = document.getElementById(num).innerHTML;

  if (kolvo > 0) {
    kolvo--;
    document.getElementById(num).innerHTML = kolvo;
  }

  if (kolvo == 0){
    document.getElementById(sub).style.visibility = 'hidden';
  }

  if (kolvo < 10) {
    document.getElementById(add).style.visibility = 'visible';
  }

}
