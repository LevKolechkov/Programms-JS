const myObject = 
{
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) // key - название свойства
{
    console.log(key, myObject[key])
}