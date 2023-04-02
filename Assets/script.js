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
 
// var saveBtn = $('#.saveBtn');
//  var saveBtnEl = $('#saveBtn');
//  var rootEl = $('#root');
// var displayEl = $('#description')

//  var textArea = rootEl.children().append()

//  $('#root').children('.timeblock').eq(2).append($('<li>test worked!</li>'))
//  saveBtnEl.on('click', function() {

//  })

//  function addText() {
//   displayTextEl.text($(event.target).attr('data-number'));
//   displayEl.append(displayTextEl)
//  }

//id:
 //hour-9
 //description (textarea)


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//id="currentDay"

var today = dayjs().format('MMM D, YYYY hh:mm A');
$("#currentDay").text(today);


});

function printProjectData(text) {
  $('#hour-9').children().eq(1).append().text(text);
}
var text = 'hardcoded';
printProjectData(text);
// var timeBlock = dayjs().format('MMM D, YYYY hh:mm A');
// $("#hour-9").children().eq(1).append().text(timeBlock);

function blockColor() {
  var hour = dayjs().hour();

  $('.time-block').each(function () {
    var currHour = parseInt($(this).attr('id'));
    console.log(this)
    console.log(hour)

    if (currHour > hour) {
      $(this).addClass("future");
    } else if (currHour === hour){
      $(this).addClass("present")
    } else {
      $(this).addClass("past")
    }

    })
  };