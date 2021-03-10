// Значение ползунка
var hValue = $('.input-range').val();

// Выбранный символ
var symbol = $('select option:selected').text();
$('.output-range').append(hValue);


// Выбор высоты пирамиды
$('.input-range').on('input', function() {
    hValue = $('.input-range').val();
    $('.output-range').empty().append(hValue);
    console.log(hValue);
    pyramidConsturctor(symbol, hValue);
});


// Выбор символа для пирамиды
$('select').change(function() {
    $('option:selected').each(function() {
        symbol = $(this).text();
        console.log(symbol);
    });
});

// Построение пирамиды
function pyramidConsturctor(symbol, heightValue) {
    $('.completed').remove();
        
    for (let i = 1; i <= heightValue; i++ ) {
        let newRow = $('<div class="uncompleted"></div>');
        newRow.appendTo('.pyramid-body');
        let eBoxValue = heightValue - i;
        let cBoxValue = i + 1;
        addEmptyBox(eBoxValue);
        addBox(cBoxValue);
        $('.uncompleted').attr('class', 'completed');
    };
};

function addEmptyBox(times) {
    for (let i = 1; i <= times; i++) {
        let emptyBox = $('<div>', {'class': 'uncolored-box box'});
        emptyBox.appendTo('.uncompleted');
    };
};
function addBox(times) {
    for (let i = 1; i <= times; i++) {
        let cBox = $('<div>', {'class': 'colored-box box'});
        cBox.appendTo('.uncompleted');
    };
};





