// when I open planner, (document ready?)

// the current day is displayed at the top of the calendar (moment.js?)
const m = moment();

console.log(m.format('MMMM Do YYYY'));

$("#currentDay").text(m.format("MMMM Do YYYY"))


//I am presented with timeblocks for standard business hours (8-5)= 10 timeblocks


// each timeblock is color coded to indicate whether it is in the past, present, or future
// CLICK into timeblock button, I can enter an event (text) and CLICK save button
// timeblock text is saved into LOCAL STORAGE
var words;
var hourInfo;

// timeblock text stays even when page is refreshed

