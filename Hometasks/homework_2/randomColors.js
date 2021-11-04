const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];

//Не понял как доделать до конца, понял только как сделть проверку на дубли и вывести новый массив без них
function mood(colorsCount) {
    console.log('цветов: ' + colorsCount);
    let usedColorsArr = [];
    let usedColorsUnduplicate;

    for (let i = 1; i <= colorsCount; i++) {
        //Результат работы функции случайных чисел записываем в переменную
        let n = randomNumber(1, 7);
        //Выбираем согласно полученным случайным числам, элементы из массива и записываем результат в переменную
        let colorName = colors[n];
        //Создаем новый массив и добавляем туда выбранные случайным образом цвета из первого массива
        usedColorsArr.push(colorName);
        //Проверяем на дубликаты полученный массив и возвращаем без дублей
        usedColorsUnduplicate = usedColorsArr.filter((item, index) => {
            return usedColorsArr.indexOf(item) === index;
        })
    }

    console.log("С проверкой на дубли", usedColorsUnduplicate);

}


function randomNumber(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

mood(3);