const bubbleSort = (array, lengthOfArray) =>
{
  while (lengthOfArray--)
  {
    let swapped = false

    for (let index = 0; index < lengthOfArray; ++index)
    {
      if (array[index] > array[index + 1])
      {                                                     // 20, 10
        array[index] = array[index] + array[index + 1]      // 20 = 20 + 10 
        array[index + 1] = array[index] - array[index + 1]  // 10 = 30 - 10
        array[index] = array[index] - array[index + 1]      // 30 = 30 - 20
                                                            // 10, 20
        swapped = true
      }
    }

    if (swapped === false)
    {
      break
    }
  }
}

let myArray = [15, -122, 1, -61, 41, 161]

bubbleSort(myArray, myArray.length)

console.log(myArray)

export default bubbleSort