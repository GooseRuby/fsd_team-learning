//маска даты
$(function(){
  $('.date').mask('00.00.0000', {placeholder: "ДД.ММ.ГГГГ"});
});




//ограничение выбора даты для filter date dropdown
let nowaday = new Date;
let maxday = new Date(nowaday.getFullYear()+1, nowaday.getMonth(), nowaday.getDate()-1);

$('.filterdatepicker').datepicker({minDate: nowaday, maxDate: maxday});
