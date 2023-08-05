/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array
{
  sum()
  {
    return this.reduce((acc, el) => 
    {
      if (typeof el === 'number') return acc + el
      else return acc
    }, 0)
  }

  onlyNumbers()
  {
    return this.filter((el) => typeof el === 'number')
  }
}

const firstExtendedArray = new ExtendedArray(5, 7, "Abc" ,13)
const secondExtendedArray = new ExtendedArray(471, 'Bruh' ,251, 5165, "Oof")

console.log(firstExtendedArray.sum())
console.log(secondExtendedArray.sum() + '\n')
console.log(firstExtendedArray.onlyNumbers())
console.log(secondExtendedArray.onlyNumbers())