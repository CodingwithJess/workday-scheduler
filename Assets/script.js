// global variables
var scheduledHours = [];
var availableHours = {};
var m = moment ();
var newDay = moment().hours(0);
var currentTime = m.hour();

// pushing time clock and date to currentDay id in HTML

function clock (){
  var dateString = moment().format("MMMM Do YYYY, h:mm a");
  $("#currentDay").html(dateString);
}

setInterval(clock, 1000);