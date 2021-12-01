// use taskmaster and Taskmaster Pro for reference
//03-Demo Dynamic for appending data example - used a for loop and pulled text content from API data

//lost on the localStorage portion of the assignment. 
//I am thinking I need to rewrite the JSON functions and how the task text is saved. 
//I want it to trigger when the save button is pressed. 
//Creating an object to save too is also something I am struggling with

var currentDayElement = document.getElementById('currentDay');
var currentDate = moment().format('MMMM Do YYYY');
currentDayElement.innerHTML = currentDate;



// task text was clicked - I want this area to be rewritten and integrated into the save button
$(".save").on("click", function() {
  console.log("area clicked")
  var timeBlock = $(this).attr("id").split("-")[1]
  // get current text of p element
  var text = $("#taskSpace-"+timeBlock).val().trim();
  console.log(text, timeBlock);
  localStorage.setItem(timeBlock, text);
});

for(var i=8; i<= 20; i++){
  $("#taskSpace-"+ i).val(localStorage.getItem(i))
}
