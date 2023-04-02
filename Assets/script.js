

$(function () {
var saveBtn = $(".saveBtn");

  // Date and Time for Current Day
  var today = dayjs().format('MMM D, YYYY hh:mm A');
  $("#currentDay").text(today);

  //Change TimeBlock to Corresponding Color Class Based on Current Hour
  function blockColor() {
    var hour = dayjs().hour();

    $('.time-block').each(function () {
      var currHour = parseInt($(this).attr('id'));

      console.log(hour);

      if (currHour > hour) {
        $(this).addClass("future");
      } else if (currHour === hour) {
        $(this).addClass("present")
      } else {
        $(this).addClass("past")
      }

    })
  };

 
  // Save on Click Persist to Local Storage
  saveBtn.on("click", function() {
    console.log('click!');
    var time = $(this).siblings(".hour").text();
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });


  //Get Text from Local Storage
  function displayText() {
    $(".hour").each(function() {
      var currHour = $(this).text();
      var currText = localStorage.getItem(currHour);
      
      $(this).siblings(".description").val(currText);

    });
  };


  blockColor();
  displayText();
});