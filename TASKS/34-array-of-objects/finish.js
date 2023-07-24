/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const firstCar = 
{
  carBrand: 'Volvo',
  price: 2700000,
  isAvailableForSale: true
}

const secondCar =
{
  carBrand: 'Nissan',
  price: 3955000,
  isAvailableForSale: false
}

const thirdCar =
{
  carBrand: 'Lada',
  price: 1500000,
  isAvailableForSale: true
}

const myArrayOfCars = [firstCar, secondCar, thirdCar]

console.log(myArrayOfCars)

myArrayOfCars.push(fourthCar = 
{ 
  carBrand: 'Toyota',
  price: 6400000,
  isAvailableForSale: false
})

console.log(myArrayOfCars)