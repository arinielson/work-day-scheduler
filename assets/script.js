let today = moment();

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
    // '6PM',
    // '7PM',
    // '8PM',
    // '9PM',
    // '10PM',
    // '11PM',
];

// Create Planner Elements and depicts past, present, or future for textarea input
for (var i = 0; i < hours.length; i++) {
    var hourlyDiv = $('<div>').addClass('row');
    containerEl.append(hourlyDiv);
    
    var hoursEl = $('<span>').text(hours[i]).addClass('col-1 text-center hour pt-2').data({hours: [i]});
    hourlyDiv.append(hoursEl);

    var textInput = $('<input>', {type: 'text', id: '012345678'[i], placeholder: 'write daily task here'}).addClass('col-10 textarea');
    hourlyDiv.append(textInput);

    var saveBtn = $('<button>').text('🖫 Save').addClass('col-1 btn saveBtn');
    hourlyDiv.append(saveBtn);
      
    presentColor();
    saveTask();    
}

var inputTags = document.querySelector('input');
var saveBtnTags = document.querySelector('.saveBtn');

function presentColor() {   
    let currentHour = moment().format('hA');
    
    if (currentHour == hours[i]) {
        textInput.addClass('present');        
    } else if (currentHour < hours[i]) {
        textInput.addClass('future');        
    } else {
        textInput.addClass('past');         
    }
}

// Not functioning properly
function saveTask() {
    var savedHourlyTask = localStorage.getItem('task');
    console.log('Item saved?');
    textInput.textContent = savedHourlyTask;
}

// Currently only targeting first row, error with Input value, not saving to localStorage
saveBtnTags.addEventListener('click', function clickSave(event) {
    event.preventDefault();    
    console.log('Button clicked');

    localStorage.setItem('10AM', inputTags[0].value);
    localStorage.setItem('11AM', inputTags[1].value);
    localStorage.setItem('12PM', inputTags[2].value);
    localStorage.setItem('1PM', inputTags[3].value);
    localStorage.setItem('2PM', inputTags[4].value);
    localStorage.setItem('3PM', inputTags[5].value);
    localStorage.setItem('4PM', inputTags[6].value);
    localStorage.setItem('5PM', inputTags[7].value);
    localStorage.setItem('6PM', inputTags[8].value);
});