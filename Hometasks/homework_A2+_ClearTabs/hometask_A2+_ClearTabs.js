const enteredString = prompt("Enter phrase");

/*
//Рабочий вариант
function deleteTab(randomString) {
    let correctedString = randomString.split(' ').filter(s => s).join(' ');
    let result = '**' + correctedString + '**';
    console.log(result);
};
deleteTab(enteredString);
*/

//Втророй рабочий вариант
function deleteTab(randomString) {
    let firstLetter = undefined;
    let lastLetter = undefined;

    for (let i = 0; i < randomString.length; i++) {
        if (randomString[i] !== ' ') {
            firstLetter = i;
            break;
        }
    }
    for (let j = randomString.length - 1;; j--) {
        if (randomString[j] !== ' ') {
            lastLetter = j;
            break;
        }

    }
    console.log("result:", '**' + randomString.slice(firstLetter, lastLetter + 1) + '**')
}
deleteTab(enteredString);