 let firstName = prompt("Введите ваше имя");
 let secondName = prompt("Введите вашу фамилию");
 let thirdName = prompt("Введите ваше отчество");
 let age = parseInt(prompt("Укажите ваш возраст"));
 const genderQuestion = confirm("Вы мужчина?");

 /* С помощью тернарного оператора
 let gender = (genderQuestion == true) ? "Мужчина" : "Женщина";;
 let pension = (gender == "Мужчина" && age < 65 || gender == "Женщина" && age < 55) ? "Нет" : "Да";;
 */

 //Обычны способ с использованием 
 let gender;
 let pension;

 while (firstName === "" || isNaN(firstName) !== true || firstName === " ") {
     firstName = prompt("Введите ваше имя");
 }
 while (secondName === "" || isNaN(secondName) !== true || secondName === " ") {
     secondName = prompt("Введите вашу фамилию");
 }
 while (thirdName === "" || isNaN(thirdName) !== true || thirdName === " ") {
     thirdName = prompt("Введите ваше отчество");
 }

 while (isNaN(age) || age === "" || age > 120 || age === " ") {
     age = parseInt(prompt("Укажите ваш возраст корректно"));
 }

 let ageTranslatedInDays = age * 365;
 let ageAfterFiveYears = age + 5;

 if (genderQuestion == true) {
     gender = "Мужчина";
 } else {
     gender = "Женщина";
 }

 if (gender == "Мужчина" && age < 65) {
     pension = "Нет";
 } else if (gender == "Женщина" && age < 55) {
     pension = "Нет";
 } else {
     pension = "Да";
 }

 alert("Ваше Ф.И.О:" + " " + firstName + " " + secondName + " " + thirdName + "\n" +
     "Ваш возраст в годах:" + " " + age + "\n" +
     "Ваш возраст в днях:" + " " + ageTranslatedInDays + "\n" +
     "Через 5 лет вам будет:" + " " + ageAfterFiveYears + "\n" +
     "Ваш пол:" + " " + gender + "\n" +
     "Вы на пенсии:" + " " + pension + "\n"
 );