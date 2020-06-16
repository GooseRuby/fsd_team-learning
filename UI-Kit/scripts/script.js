"use strict";

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function agreeFunction() {
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

/*плюс в дропбоксе*/
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

/*минус в дропбоксе*/
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

/*строка ввода "кол-во гостей"*/
function editGuest(numadult, numchild, numbaby, buttonid) {
  let kolvoAdult = document.getElementById(numadult).innerHTML;
  let kolvoChild = document.getElementById(numchild).innerHTML;
  let kolvoBaby = document.getElementById(numbaby).innerHTML;

  let sum = +kolvoAdult + +kolvoChild + +kolvoBaby;
  console.log(sum);

  let but = document.getElementById(buttonid);

  if (sum == 1 || sum == 21) {
    but.innerHTML = sum + ' гость';
  }else if ((sum >= 2 && sum <= 4)||(sum >= 22 && sum <= 24)) {
    but.innerHTML = sum + ' гостя';
  }else if ((sum >= 5 && sum <= 20)||(sum >= 25 && sum <= 30)) {
    but.innerHTML = sum + ' гостей';
  }else if (sum == 0) {
    but.innerHTML = 'Сколько гостей';
  }
}

function clearFunction(numadult, numchild, numbaby, buttonid, subsub0, subsub1, subsub2, addadd0, addadd1, addadd2) {
  document.getElementById(numadult).innerHTML = 0;
  document.getElementById(numchild).innerHTML = 0;
  document.getElementById(numbaby).innerHTML = 0;
  document.getElementById(buttonid).innerHTML = 'Сколько гостей';
  document.getElementById(subsub0).style.visibility = 'hidden';
  document.getElementById(subsub1).style.visibility = 'hidden';
  document.getElementById(subsub2).style.visibility = 'hidden';
  document.getElementById(addadd0).style.visibility = 'visible';
  document.getElementById(addadd1).style.visibility = 'visible';
  document.getElementById(addadd2).style.visibility = 'visible';
}
