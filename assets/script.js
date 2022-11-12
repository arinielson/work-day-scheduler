let today = moment();

$('#currentDay').text(today.format('MMMM Do YYYY, h:mm a'));

const containerEl = $('.container');

const hours = [    
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
    '6PM'
];

var inputArea = $('input').val();

savedInput();

function savedInput() {
    const savedValue = localStorage.getItem('tasks');
    console.log(savedValue);
}


// Creates Planner Elements (hour, textarea, and save button)
function renderBoxes(){
    for (var i = 0; i < hours.length; i++) {
        var hourlyDiv = $('<div>').addClass('row');
        containerEl.append(hourlyDiv);
        
        var hoursEl = $('<span>').text(hours[i]).addClass('col-1 text-center hour pt-2').data({hours: [i]});
        hourlyDiv.append(hoursEl);

        var textInput = $('<input>', {type: 'text', id: i, placeholder: 'write daily task here'}).addClass('col-10 textarea');
        hourlyDiv.append(textInput);

        var saveBtn = $('<button>', {id: i}).text('🖫 Save').addClass('col-1 btn saveBtn');
        hourlyDiv.append(saveBtn);

        console.log(textInput);
        
        presentColor(i);           
    }

// Click function to save tasks
    $('button').on('click', function(event){
        // const id = $(event.target).attr('id');        
        const value = $(event.target).siblings('input').val();                

        localStorage.setItem('tasks', value);
    });
}

// Changes the input textarea color class depending on current hour
function presentColor(i) {   
    let currentHour = moment().format('hA');
    if (currentHour == hours[i]) {
        $(`input[id=${i}]`).addClass('present');        
    } else if (currentHour < hours[i]) {
        $(`input[id=${i}]`).addClass('future');        
    } else {
        $(`input[id=${i}]`).addClass('past');         
    }
}

renderBoxes();