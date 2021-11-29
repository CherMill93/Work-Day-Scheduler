// use taskmaster and Taskmaster Pro for reference
//03-Demo Dynamic for appending data example - used a for loop and pulled text content from API data

var currentDayElement = document.getElementById('currentDay');
var currentDate = moment().format('MMMM Do YYYY');
currentDayElement.innerHTML = currentDate;


var taskSaveObject = {taskArea: []}; //can this remain empty? THis is an object, not an array

// if nothing in localStorage, create a new object to track all task status arrays
// if (!taskSaveObject) {
//   taskSaveObject = {
//     taskArea: [],
//   };
//   $.each(taskSaveObject, function(list, arr) {
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       saveTasks(task.text, task.date, list);
//     });
//   });
// }

//Press save button to save tasks
var saveButton = document.getElementById('save')
var saveTasks = function() {
  taskSaveObject = JSON.parse(localStorage.getItem("taskArea")) //am I using "taskArea" correctly? "taskArea" is the location where the task is written in the HTML. redundant
  localStorage.setItem("taskArea", JSON.stringify(taskSaveObject))
  console.log("save button was successful")
};

saveButton.addEventListener("click", saveTasks); //THis is supposed to run the save function when the save button is pressed. Setup correctly?

//save tasks end



// task text was clicked
$(".taskArea").on("click", "p", function() {
  console.log("area clicked")
  // get current text of p element
  var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("taskArea").attr("id","textSpace").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});

// editable field was un-focused
$(".taskArea").on("blur", "textarea", function(){
  // get current value of textarea
  var text = $(this).val();

  // get status type and position in the list
  console.log('taskArea element', $(this).closest(".taskArea"));
  var status = $(this)
    .closest(".taskArea")
    .attr("id")
    .replace("taskArea");
  var index = $(this)
    .closest("taskArea-item")
    .index();

  // update task in array and re-save to localstorage
  console.log("task save area", JSON.stringify(taskSaveObject));
  
  taskSaveObject.taskArea[index].text = text;
  saveTasks();

  // recreate p element
  var taskP = $("<p>")
    .addClass("col w-70 border border-primary taskArea")
    .text(text);

  // replace textarea with new content
  $(this).replaceWith(taskP);
});