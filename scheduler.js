// use taskmaster and Taskmaster Pro for reference
//03-Demo Dynamic for appending data example - used a for loop and pulled text content from API data

var currentDayElement = document.getElementById('currentDay');
var currentDate = moment().format('MMMM Do YYYY');
currentDayElement.innerHTML = currentDate;
