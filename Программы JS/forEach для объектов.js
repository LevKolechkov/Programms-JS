const myObject = 
{
    x: 10,
    y: true,
    z: 'abc'
}

Object.keys(myObject).forEach(key => {console.log(key, myObject[key])}) // По именам свойств

console.log()

Object.values(myObject).forEach(value => {console.log(value)}) // По значениям свойств

