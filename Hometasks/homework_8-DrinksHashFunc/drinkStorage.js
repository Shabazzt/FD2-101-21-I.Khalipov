const drinkStorage = new DrinksHashFunc();
//key   - название напитка
//value - информация о напитке
const infoContainer = document.getElementById("infoContainer");
const showInfoContainer = document.getElementById("showInfoContainer");
const addInfoBtn = document.getElementById("addInfoAboutDrink");
const showDrinkInfoBtn = document.getElementById("showDrinkInfo");
const deleteInfoBtn = document.getElementById("deleteDrink");
const showDrinkListBtn = document.getElementById("showDrinkList");
//
let drinkInfoInputs = infoContainer.querySelectorAll(".infoInputs");
//
addInfoBtn.addEventListener("click", addInfoAboutDrinkToStorage);
showDrinkInfoBtn.addEventListener("click", showInfoAboutDrink);
deleteInfoBtn.addEventListener("click", deleteDrinkInfo);
showDrinkListBtn.addEventListener("click", showDrinkKeys);

//Функция добавляет информацию о напитке

function addInfoAboutDrinkToStorage() {
    const newDrinkInfo = {};
    const newDrinkName = drinkInfoInputs[0].value;
    for (let input of drinkInfoInputs) {
        newDrinkInfo[input.name] = input.value;
    }
    drinkStorage.addValue(newDrinkName, newDrinkInfo);
}

//Функция выводит информацию о напитке
function showInfoAboutDrink() {
    const drinkName = drinkInfoInputs[0].value;
    const answer = drinkStorage.getValue(drinkName);
    console.log(answer);
    if (answer !== undefined) {
        const infoBlock = document.createElement("div");
        infoBlock.setAttribute("class", "infoBlock");
        const currentDrinkName = document.createElement("p");
        currentDrinkName.innerText = answer.drinkName;
        const currentDrinkType = document.createElement("p");
        if (answer.drinkType === "") {
            currentDrinkType.innerText = "К сожалению нет данных"
        } else {
            currentDrinkType.innerText = answer.drinkType;
        }
        const currentDrinkHistory = document.createElement("p");
        if (answer.drinkHistory === "") {
            currentDrinkHistory.innerText = "К сожалению нет данных"
        } else {
            currentDrinkHistory.innerText = answer.drinkHistory;
        }
        const currentDrinkRecipe = document.createElement("p");

        if (answer.drinkRecipe === "") {
            currentDrinkRecipe.innerText = "К сожалению нет данных"
        } else {
            currentDrinkRecipe.innerText = answer.drinkRecipe;
        }
        infoBlock.appendChild(currentDrinkName);
        infoBlock.appendChild(currentDrinkType);
        infoBlock.appendChild(currentDrinkHistory);
        infoBlock.appendChild(currentDrinkRecipe);
        showInfoContainer.appendChild(infoBlock);
    } else {
        showInfoContainer.innerText = "В хранилище нет введенного напитка"
    }

}
//Функция удаляет напиток из базы
function deleteDrinkInfo() {
    const drinkName = drinkInfoInputs[0].value;
    if (drinkStorage.deleteValue(drinkName) === true) {
        showInfoContainer.innerText = "Информация о напитке УДАЛЕНА!";
    } else {
        showInfoContainer.innerText = "В хранилище такой напиток отсутствует";
    }
}
//Функция выводит список ключей(Названий напитков)
function showDrinkKeys() {
    if (drinkStorage === undefined) {
        showInfoContainer.innerText = "В хранилище нет ни одного напитка";
    } else {
        showInfoContainer.innerText = drinkStorage.getKeys();
    }
}