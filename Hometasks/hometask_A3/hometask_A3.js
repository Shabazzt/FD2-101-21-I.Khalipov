const randomPhrase = prompt('Enter something').toLowerCase();


//Первый способ

function clearSymbols(phrase) {
    const excludes = {
        '.': '',
        ',': '',
        '!': '',
        '@': '',
        '#': '',
        '$': '',
        '%': '',
        '^': '',
        '&': '',
        '*': '',
        '(': '',
        ')': '',
        '_': '',
        '-': '',
        '+': '',
        '=': '',
        '[': '',
        ']': '',
        '{': '',
        '}': '',
        '"': '',
        ':': '',
        ';': '',
        '/': '',
        '<': '',
        '>': '',
        ' ': '',
        'ё': 'е',
        'ъ': 'ь'
    }
    let correctedString = "";
    //Цикл принимает введенную строку и проверяет на наличие исключений и выводит строку без исключений
    for (let i = 0; i < phrase.length; i++) {
        let phraseSymbol = phrase[i];
        console.log(phraseSymbol);
        for (j in excludes) {
            if (phraseSymbol === j) {
                phraseSymbol = excludes[j];
            };
        }
        correctedString += phraseSymbol;
    }
    const compareString = correctedString.split('').reverse().join('');
    if (compareString === correctedString) {
        console.log('Введенная фраза палиндром:', compareString + '=' + correctedString);
    } else {
        console.log('Введенная фраза не является палиндромом:', compareString + ' ' + '\u2260' + ' ' + correctedString);
    }

    console.log('Введенная фраза:', phrase);
    console.log('Скорректированная фраза:', correctedString);

}
clearSymbols(randomPhrase);


/*
//Второй способ
function checkToPalindrom(phrase) {
    phrase = phrase.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = phrase.length - 1;
    for (let i = 0; i < phrase.length / 2; i++) {
        if (phrase[i] !== phrase[lastIndex - i]) {
            console.log('Не палиндром')
            return false;
        }
    }
    console.log(phrase, 'Палиндром');
}

*/