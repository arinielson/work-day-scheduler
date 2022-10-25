// Current Day
const today = moment();
$('#currentDay').text(today.format('MMMM Do YYYY, h:mm a'));

var currentHour = moment().format('hA');

const containerEl = $('.container');

const hours = [
    // '9AM',
    // '10AM',
    // '11AM',
    // '12PM',
    // '1PM',
    // '2PM',
    // '3PM',
    // '4PM',
    '5PM',
    '6PM',
    '7PM',
    '8PM',
    '9PM',
    '10PM',
    '11PM',
];

// Create Planner Elements and depicts past, present, or future for textarea input
for (var i = 0; i < hours.length; i++) {
    var hourlyDiv = $('<div>').addClass('row');
    containerEl.append(hourlyDiv);

    var hoursEl = $('<span>').text(hours[i]).addClass('col-1 text-center hour pt-2').data({hours: [i]});
    hourlyDiv.append(hoursEl);

    var textInput = $('<input>', {type: 'text'}).addClass('col-10 textarea');
    hourlyDiv.append(textInput);

    var saveBtn = $('<button>').text('🖫 Save').addClass('col-1 btn saveBtn');
    hourlyDiv.append(saveBtn);

    presentColorCode();
}

function presentColorCode() {    
    if (currentHour == hours[i]) {
        textInput.addClass('present');        
    } else if (currentHour < hours[i]) {
        textInput.addClass('past');        
    } else {
        textInput.addClass('future');        
    }
}

// Saves textarea input data
function saveTextInput() {

}