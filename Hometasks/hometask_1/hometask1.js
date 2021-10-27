 let firstName = prompt("Введите ваше имя");
 let secondName = prompt("Введите вашу фамилию");
 let thirdName = prompt("Введите ваше отчество");
 let age = parseInt(prompt("Укажите ваш возраст"));
 let gender = confirm("Укажите ваш пол");
 let ageTranslatedInDays = age * 365;
 let ageAfterFiveYears = age + 5;

 alert("Ваше Ф.И.О:" + " " + firstName + " " + secondName + " " + thirdName + "\n" +
     "Ваш возраст в годах:" + " " + age + "\n" +
     "Ваш возраст в днях:" + " " + ageTranslatedInDays + "\n" +
     "Через 5 лет вам будет:" + " " + AfterFiveYears + "\n" +
     "Ваш пол:"
 );