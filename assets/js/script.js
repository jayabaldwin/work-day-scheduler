// code is wrapped in document ready function... 
// this ensures browser has finished rendering all HTML elements before running the code
$(document).ready(function () {


  // added event listener for the saved button
  $('.saveBtn').on('click', function(){
    var blockText = $(this).siblings('.description').val();
    var blockTime = $(this).parent().attr('id');
    console.log(blockText, blockTime);
    // stores data of hour-id and corresponding text
    localStorage.setItem(blockTime, blockText);
  });

  

  // set current hour using dayjs
  var currentHour = dayjs().hour()
  console.log("Hour", currentHour);

  console.log("Timeblock", $('.time-block'));
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


  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // grab an element you want to refer to by id and class, list all elements and give it a value with .val method
  // check in local storage if the key pairs exist localStorage.getItem and give value to text area
  // $("#hour-5 .description")





  // Added code to display the current date and attached to header through id
  const currentDate = dayjs();
  const formattedDate = currentDate.format('MMMM D, YYYY');
  $('#currentDay').text(formattedDate);
});