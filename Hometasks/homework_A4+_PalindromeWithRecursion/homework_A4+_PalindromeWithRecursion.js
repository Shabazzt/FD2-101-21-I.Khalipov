const str = prompt('Enter something').toLowerCase();
//"Go hang a salami, I'm a lasagna hog"

function polyndrom(enteredString) {
    const readyToCompareString = clear(enteredString);
    let result = checkToPolyndrom(readyToCompareString);
    if (result == true) {
        console.log("Введенная фраза палиндром:", enteredString);
    } else {
        console.log("Введенная фраза не является палиндромом:", enteredString);
    };
}
polyndrom(str);


function clear(enteredString) {
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
        "'": '',
        'ё': 'е',
        'ъ': 'ь'
    }
    let correctedString = "";
    for (let i = 0; i < enteredString.length; i++) {
        let phraseSymbol = enteredString[i];
        for (j in excludes) {
            if (phraseSymbol === j) {
                phraseSymbol = excludes[j];
            };
        }
        correctedString += phraseSymbol;
    }
    return correctedString;
};


function checkToPolyndrom(formatedString) {
    let strLength = formatedString.length;
    //Здесь помогла, запись длины строки в отдельную переменную
    if (strLength < 2) {
        return true;
    };
    if (formatedString[0] === formatedString[strLength - 1]) {
        //Здесь не было return, добавил тоже помогло функции работать корректно
        return checkToPolyndrom(formatedString.slice(1, strLength - 1));
    } else { return false };
}