// when I open planner, (document ready?)
var words;
var hourInfo;
// the current day is displayed at the top of the calendar (moment.js?)
const m = moment();

console.log(m.format("MMMM Do YYYY"));

$("#currentDay").text(m.format("MMMM Do YYYY"));

// each timeblock is color coded to indicate whether it is in the past, present, or future

$(document).ready(function () {
  colorChange();
  // renderText ();
});

function colorChange() {
  var realTime = moment().hours();
  var timeTest = parseInt($(this).attr("id"));
  if (realTime > timeTest) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (realTime < timeTest) {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  } else {
    $(this).removeClass("future");
    $(this).removeClass("past");
    $(this).addClass("present");
  }
}

// CLICK into timeblock button, I can enter an event (text) and CLICK save button
// timeblock text is saved into LOCAL STORAGE

$(".saveBtn").click(function () {
  words = $(this).siblings(".input").text();
  console.log(words);
  hourInfo = $(this).siblings(".hour").text();
  console.log(hourInfo);
  localStorage.setItem(hourInfo, JSON.stringify(words));
});

// timeblock text stays even when page is refreshed

function getScheduleFromLS() {
  var schedule;
  if (localStorage.getItem("schedule") === null) {
    schedule = [];
  } else {
    schedule = JSON.parse(localStorage.getItem("schedule"));
  }
  $.each(schedule, function (index, item) {
    $("#" + item.time)
      .children(".description")
      .append(item.plan);
    if (item.plan !== "") {
      clearPlan($("#" + item.time).children(".hour"));
    }
  });
}
