// Полифилл метода unique
Array.prototype.unique = function() {
    return [...new Set(this)];
};

// Пример использования
const array = [1, 2, 2, 3, 4, 4, 5];
console.log(array.unique()); // [1, 2, 3, 4, 5]

// Примеры работы с Set и WeakSet
const mySet = new Set();
mySet.add({ name: 'John' });
console.log(mySet);

const myWeakSet = new WeakSet();
const obj = {};
myWeakSet.add(obj);
console.log(myWeakSet.has(obj)); // true

// Примеры работы с Map и WeakMap
const myMap = new Map();
myMap.set(11, 'value for 11');
console.log(myMap.get(11)); // 'value for 11'

const myWeakMap = new WeakMap();
const keyObject = {};
myWeakMap.set(keyObject, 'value associated with keyObject');
console.log(myWeakMap.get(keyObject)); // 'value associated with keyObject'