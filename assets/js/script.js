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
    // compare what we clicked on and grab data
  });


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?


  var currentHour = dayjs().hour()
  console.log("Hour", currentHour);
  var pastHour;
  var futureHour;

  console.log("Timeblock", $('.time-block'));
  $('.time-block').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1])
    console.log("Attribute value", blockHour, blockHour === currentHour);


    // if statement compare the hours and attach corresponsing class
    // dont forget to remove previous class when adding a new one
   });




  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // grab an element you want to refer to by id and class, list all elements and give it a value with .val method
  // check in local storage if the key pairs exist localStorage.getItem and give value to text area
  // $("#hour-5 .description")


  // TODO: Add code to display the current date in the header of the page.
});