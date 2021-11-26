// use taskmaster and Taskmaster Pro for reference
//03-Demo Dynamic for appending data example - used a for loop and pulled text content from API data

var currentDayElement = document.getElementById('currentDay');
var currentDate = moment().format('MMMM Do YYYY');
currentDayElement.innerHTML = currentDate;


// var tasks = document.getElementById('taskArea')
// tasksfunction()

// task text was clicked
$("#taskArea").on("click", "p", function() {
  // get current text of p element
  var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("newTask").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});

// editable field was un-focused
$("#taskArea").on("blur", "p", function(){
  // get current value of textarea
  var text = $(this).val();

  // get status type and position in the list
  var status = $(this)
    .closest("#taskArea")
    .attr("id")
    .replace("list-", "");
  var index = $(this)
    .closest("#taskArea-item")
    .index();
});