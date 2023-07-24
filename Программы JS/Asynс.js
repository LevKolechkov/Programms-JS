const getData = async (url) => 
{
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try
{
    const data = getData(url)
    data.then(result => console.log(result))
}
catch (error)
{
    console.log(error.message)
}