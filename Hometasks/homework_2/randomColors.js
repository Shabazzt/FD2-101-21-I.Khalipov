function randomNumber(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function getRandomColors(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    let resultingColors = {};
    for (let i = 1; i <= colorsCount; i++) {
        let n = randomNumber(1, 7);
        let colorName = colors[n];
        console.log('Цвет, выбранный случайно из массива:', colorName + " " + "Номер итерации:" + i);
        //Условие.Если данный цвет уже встречался , нужно взять следующий. Как повторить цикл выбора цвета???!!
        if (colorName in resultingColors) {
            continue;
        } else {
            resultingColors[colorName] = colors[n];
        }
        console.log('Создаваемый объект для фильтрации:', resultingColors);
    }

    console.log('Цветов было взято: ' + colorsCount);
}

getRandomColors(3);