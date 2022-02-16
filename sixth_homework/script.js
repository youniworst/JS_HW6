'use strict';

/* 1 Написать функцию removeDuplicates, которая удаляет все дублирующиеся элементы массива.

Примечание: Все элементы массива только числа */
function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) delete arr[j];
        };
    }
    let result = arr.filter(element => element !== undefined);
    return result
}
const resultArray = removeDuplicates([1, 2, 3, 2, 2, 3, 1, 5, 9, 7, 7]);
console.log(resultArray)

const otherResultArray = removeDuplicates([1, 2, 3, 3, 4, 4, 4, 1, 2, 4, 5, 6])
console.log(otherResultArray)

/* 2 Написать функцию revertString которая на вход принимает строку а возвращает перевернутую строку (Массив тут в помощь и методы строки) */

function reverteString(str) {
    return str.split('').reverse().join('');
}
const revertedStr = reverteString('laptop');
console.log(revertedStr);
const revertedStr2 = reverteString('teodor');
console.log(revertedStr2)


// 3 Написать функцию createMatrix(n, m), которая создает многомерный массив (многомерный массив - это массив массивов такого тип -> [ [1, 2], [3, 4], [5, 6] ] ) и возвращает его. Эта функция принимает 2 аргумента:
// n - это количество подмассивов
// m - количество элементов в каждом подмассиве
// Каждый элемент подмассива должен быть инкрементирован (+ 1)

function createMatrix(n, m) {
    let resultArr = [];
    let element = 1;

    for (let i = 0; i < n; i++) {
        let miniArr = [];

        for (let j = 0; j < m; j++) {
            miniArr.push(element++)
        }

        resultArr.push(miniArr);
    }

    return resultArr
}
const matrixArr = createMatrix(3, 4);
console.log(matrixArr)
// [
// [1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12]
//]
const matrixArr2 = createMatrix(5, 10)
console.log(matrixArr2)