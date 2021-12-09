const testArr = [5, 7, [4, [2], 8, [1, 3], 2],
    [9, []], 1, 8
];

function calcSumIntoArray(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) === true) {
            console.log("Зашел в новый массив:");
            console.log("Элемент:", arr[i]);
            result += calcSumIntoArray(arr[i]);
            console.log("Сумма:", result);
        } else {
            result += arr[i];
            console.log("Элемент", arr[i]);
            console.log("Сумма:", result);
        }
    }
    return result;
}

alert(calcSumIntoArray(testArr));