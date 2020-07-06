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


// adding textareas to HTML for workday slots

for (var hour = 8; hour < 17; hour++) {
  scheduledHours.push(moment({hour}).format('h  a'));
  $('.container').append(`<div class='row time-block' data-time='${hour}'>
       <!--hour column-->
           <div class='col-sm col-md-2 hour'>
             <p>${moment({hour}).format('h  a')}</p>
           </div>
        <!--scheduling column-->
           <div class='col-sm col-md-10 d-flex description'>
              <div class='input-group'>
                <textarea class="form-control text-area"></textarea>
                <div class='input-group-append'>
                  <button class='save-button d-flex justify-center align-center'>
                    <i class='far fa-save fa-2x save-icon'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>`);
}