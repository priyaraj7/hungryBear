import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CalculateWD } from './day';

$(document).ready(function () {
  $('form#enter').submit(function (event) {
    event.preventDefault();
    let date = parseInt($('#date').val());
    let month = parseInt($('#month').val());
    let year = parseInt($('#year').val());
    let newDate = new CalculateWD(month, date, year);
    console.log(newDate);

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //var output = weekDay(days[newDate.zeller()])
    //var output = weekDay(date, month, year)
    console.log(days[newDate.zeller()]);


    // $('#solution').append(weekDay[newDate.zeller()]);
    $('#solution').text(days[newDate.zeller()]);

  });
});

// let newDate = new CalculateWD(2, 2020, 29);

// let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// console.log(days[newDate.zeller()]);


// function zeller() {

// }