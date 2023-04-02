// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//id for each block: id="hour-x"  
//each has a class of => "time-block hour description" in descending order
//button: class = "saveBtn"



$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 
  //Change TimeBlock to Corresponding Color Class Based on Current Hour
  function blockColor() {
    var hour = dayjs().hour();

    $('.time-block').each(function () {
      var currHour = parseInt($(this).attr('id'));
      console.log(this)
      console.log(hour)

      if (currHour > hour) {
        $(this).addClass("future");
      } else if (currHour === hour) {
        $(this).addClass("present")
      } else {
        $(this).addClass("past")
      }

    })
  };

  blockColor();

var saveBtn = $(".saveBtn");

// Save on Click Persist to Local Storage
saveBtn.on("click", function() {
  console.log('click!');
  var time = $(this).siblings(".hour").text();
  var text = $(this).siblings(".description").val();
  localStorage.setItem(time, text);
});


// Date and Time for Current Day
var today = dayjs().format('MMM D, YYYY hh:mm A');
$("#currentDay").text(today);


});




function printProjectData(text) {
  $('#hour-9').children().eq(1).append().text(text);
}
var text = 'hardcoded';
printProjectData(text);

