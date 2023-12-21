// code is wrapped in document ready function... 
// this ensures browser has finished rendering all HTML elements before running the code
$(document).ready(function () {


  // event listener for click events on the saved button
  $('.saveBtn').on('click', function(){
    preventDefault();
    var blockText = $(this).siblings('.description').val();
    var blockTime = $(this).parent().attr('id');
    console.log(blockText, blockTime);
    // stores data of hour-id and corresponding text as key-value pairs
    localStorage.setItem(blockTime, blockText);
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


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // grab element by id and class, list all elements and give a value with .val method
  // check in local storage if the key pairs exist localStorage.getItem and give value to text area
  // $("#hour-5 .description")

  // localStorage.getItem(blockText);

  // $(window).on('load', function(){
  //   var savedData = localStorage.getItem(blockText)



  // });

  // select each div element by ID and class
  // $("#hour-9 .description").val();
  // $("#hour-10 .description").val();
  // $("#hour-11 .description").val();
  // $("#hour-12 .description").val();
  // $("#hour-13 .description").val();
  // $("#hour-14 .description").val();
  // $("#hour-15 .description").val();
  // $("#hour-16 .description").val();
  // $("#hour-17 .description").val();


  // Displays the current date in header through ID
  const currentDate = dayjs();
  const formattedDate = currentDate.format('MMMM D, YYYY');
  $('#currentDay').text(formattedDate);
});