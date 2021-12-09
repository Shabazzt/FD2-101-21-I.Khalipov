function randomNumber(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function getRandomColors(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    let resultingColors = {};
    console.log('Цветов было взято: ' + colorsCount);
    for (let i = 1; i <= colorsCount; i++) {
        let colorName = "";
        while (true) {
            let n = randomNumber(1, 7);
            colorName = colors[n];
            if (!(colorName in resultingColors)) {
                break;
            }
        }
        resultingColors[colorName] = true;
        console.log(colorName);
    }
}

getRandomColors(3);