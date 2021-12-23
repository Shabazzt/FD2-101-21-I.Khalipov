function DrinksHashFunc(key, value) {
    //Спасаем this на всякий случай
    let self = this;
    //Создаем приватный хеш для хранения данных
    self.hashStorage = {};

    //Сохраняет указанное значение под указанным ключом и присваивает ему указанное значение
    self.addValue = function(key, value) {
            self.hashStorage[key] = value;
        }
        //Возвращает значение по указанному ключу
    self.getValue = function(key) {
            if (key in self.hashStorage) {
                return self.hashStorage[key];
            } else {
                return undefined;
            }
        }
        //Удаляет значение с указанным ключом, если значение удалено возвращает true
    self.deleteValue = function(key) {
            if (key in self.hashStorage) {
                delete self.hashStorage[key];
                return true;
            } else {
                return false;
            }
        }
        //Возвращает массив ключей
    self.getKeys = function() {
        let keysArr = [];
        for (let key in self.hashStorage) {
            keysArr.push(key);
        }
        return (keysArr);
    }
}