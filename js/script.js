do {
    var amount = +prompt('Введите количество (в цифрах (не 0))')
} while (amount == 0);

if(isNaN(amount)){
    amount == 5
}

do {
    var symbol = prompt('Введите символ для отступов')
} while (symbol === '');

do {
    var endsym = prompt('Введите конечный символ')
} while (endsym === '');

var end = 0
var result = endsym

while (end < amount) {
    result = symbol + result
    end++
    console.log(result);
}