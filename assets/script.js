// Current Day
const today = moment();
$('#currentDay').text(today.format('MMMM Do YYYY, h:mm a'));

const containerEl = $('.container');

const hours = [
    '9AM',
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
];

for (var i = 0; i < hours.length; i++) {    
    var hourlyDiv = $('<div>').addClass('row m-1');
    containerEl.append(hourlyDiv);

    var hoursEl = $('<span>');
    hoursEl.text(hours[i]);
    hoursEl.addClass('col-1 text-right border-bottom');
    hourlyDiv.append(hoursEl);

    var textInput = $('<input>', {type: 'text'});
    textInput.addClass('col-10 border-0 text-left bg-light');
    hourlyDiv.append(textInput);

    var saveBtn = $('<button>').text('🖫 Save');
    saveBtn.addClass('btn btn-info col-1 text-center');
    hourlyDiv.append(saveBtn);
}

function presentHour() {  

}

function saveTextInput() {
    
}