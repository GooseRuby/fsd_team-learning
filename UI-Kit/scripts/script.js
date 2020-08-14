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
function PlusFunction(sub,num,add,clr) {
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

  document.getElementById(clr).style.visibility = 'visible';
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

  let guestString = '';

  let sum = +kolvoAdult + +kolvoChild;

  let but = document.getElementById(buttonid);

  if (sum == 1 || sum == 21) {
    guestString += sum + ' гость';
  }else if ((sum >= 2 && sum <= 4)||(sum >= 22 && sum <= 24)) {
    guestString += sum + ' гостя';
  }else if ((sum >= 5 && sum <= 20)||(sum >= 25 && sum <= 30)) {
    guestString += sum + ' гостей';
  }else if (sum == 0) {
    guestString += 'Сколько гостей';
  }

  if (kolvoBaby == 1) {
    guestString += ', 1 младенец';
  }else if (kolvoBaby >= 2 && kolvoBaby <= 4) {
    guestString += ', ' + kolvoBaby + ' младенца';
  }else if (kolvoBaby >= 5) {
    guestString += ', ' + kolvoBaby + ' младенцев';
  }

  but.innerHTML = guestString;

  if (kolvoAdult == 0 && (kolvoChild > 0 || kolvoBaby > 0)) {
    but.innerHTML = 'Добавьте взрослого';
  }

}

function clearFunction(numadult, numchild, numbaby, buttonid, subsub0, subsub1, subsub2, addadd0, addadd1, addadd2, clr) {
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
  document.getElementById(clr).style.visibility = 'hidden';
}



/*_________________ВТОРОЙ DROPDOWN_____________*/

function roomFunction() {
  document.getElementById("roomDropdown").classList.toggle("show");
}

/*плюс в дропбоксе*/
function RoomPlusFunction(sub,num,add) {
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
function RoomMinusFunction(sub,num,add) {
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
function editRoom(numbedr, numbed, numbath, buttonid) {
  let kolvoBedroom = document.getElementById(numbedr).innerHTML;
  let kolvoBed = document.getElementById(numbed).innerHTML;
  let kolvoBathroom = document.getElementById(numbath).innerHTML;

  let roomString = '';

  let but = document.getElementById(buttonid);

  if (kolvoBedroom == 1) {
    roomString += kolvoBedroom + ' спальня';
  }else if (kolvoBedroom >= 2 && kolvoBedroom <= 4) {
    roomString += kolvoBedroom + ' спальни';
  }else if (kolvoBedroom >= 5 && kolvoBedroom <= 10) {
    roomString += kolvoBedroom + ' спален';
  }

  if (kolvoBed == 1) {
    roomString += ', ' + kolvoBed + ' кровать';
  }else if (kolvoBed >= 2 && kolvoBed <= 4) {
    roomString += ', ' + kolvoBed + ' кровати';
  }else if (kolvoBed >= 5 && kolvoBed <= 10) {
    roomString += ', ' + kolvoBed + ' кроватей';
  }

  if (kolvoBathroom == 1) {
    roomString += ', ' + kolvoBathroom + ' ванная';
  }else if (kolvoBathroom >= 2 && kolvoBathroom <= 4) {
    roomString += ', ' + kolvoBathroom + ' ванные';
  }else if (kolvoBathroom >= 5 && kolvoBathroom <= 10) {
    roomString += ', ' + kolvoBathroom + ' ванных';
  }

  but.innerHTML = roomString;

  if (roomString == '') but.innerHTML = 'Комнаты';
}


function checkboxFunction(arrow) {
  document.getElementById("checkboxlist").classList.toggle("show");
  console.log('active');
  document.getElementById(arrow).classList.toggle("rotate")
}


/*кнопка лайка*/
function like(likebt, likeid) {
  let counter = document.getElementById(likeid).innerHTML;
  let button = document.getElementById(likebt);


  if (!button.classList.contains('liked-like-button')) {
    button.classList.add("liked-like-button");
    counter++;
    console.log(likeid+' +1');
  } else {
    button.classList.remove("liked-like-button");
    counter--;
    console.log(likeid+' -1');
  }

  document.getElementById(likeid).innerHTML = counter;

}
