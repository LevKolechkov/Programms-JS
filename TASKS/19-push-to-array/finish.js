/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const myArray = [516, null, 'Bruh']

for (index = 0; index < 3; ++index)
{
    myArray.push(undefined)
}

console.log(myArray)

myArray.pop()

console.log(myArray)