let today = moment();

$('#currentDay').text(today.format('MMMM Do YYYY, h:mm a'));

const containerEl = $('.container');

const hours = [
    // 9,
    // 10,
    // 11,
    // 12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
];

// Creates Planner Elements and depicts past, present, or future for textarea input
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

    $('button').on('click', function(event){
        const id = $(event.target).attr('id');
        console.log(id);
        const value = $(event.target).siblings('input').val();
        console.log(value);
    });
}

function presentColor(i) {   
    let currentHour = moment().format('h');
    console.log(currentHour);
    console.log(hours[i]);

    if (currentHour == hours[i]) {
        $(`input[id=${i}]`).addClass('present');        
    } else if (currentHour < hours[i]) {
        $(`input[id=${i}]`).addClass('future');        
    } else {
        $(`input[id=${i}]`).addClass('past');         
    }
}

renderBoxes();