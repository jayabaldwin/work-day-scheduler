// code is wrapped in document ready function... 
// this ensures browser has finished rendering all HTML elements before running the code
$(document).ready(function () {


  // event listener for click events on the saved button
  $('.saveBtn').on('click', function(){
    var blockText = $(this).siblings('.description').val();
    var blockTime = $(this).parent().attr('id');
    console.log(blockText, blockTime);
    // stores data of hour-id and corresponding text as key-value pairs
    localStorage.setItem(blockTime, blockText);
  });



  // retrieve data saved to local storage
  $(".time-block").each(function() {
    var blockTime = $(this).attr('id');
    var savedData = localStorage.getItem(blockTime);
    // find description class within the div and insert text from variable savedData
    $(this).find(".description").text(savedData);
    });



  // set current hour using dayjs
  var currentHour = dayjs().hour()
  console.log("Hour", currentHour);

  console.log("Timeblock", $('.time-block'));
  // iterate over all time blocks using each() ehich returns an object
  $('.time-block').each(function(){
    // separate the numerical value at the end of the id i.e. "hour-10" and parse it as an integer
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    console.log("Attribute value", blockHour, blockHour === currentHour);

    // compare the integer to the current time and add/remove class accordingly
    if (blockHour > currentHour) {
      $(this).addClass('future');
      console.log("In the future")
    } else if (blockHour === currentHour) {
      $(this).removeClass('future');
      $(this).addClass('present');
      console.log("Right now!")
    } else {
      $(this).removeClass('present');
      $(this).addClass('past');
      console.log("In the past");
    }
  });

  

  // Displays the current date in header through ID
  const currentDate = dayjs();
  const formattedDate = currentDate.format('MMMM D, YYYY');
  $('#currentDay').text(formattedDate);
});