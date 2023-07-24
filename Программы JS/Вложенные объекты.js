let someCountry = 
{
    nameOfCountry: 'Russia',
    amountOfPeople: 16262464226,
    babaysCity: 
    {
        nameOfCity: 'Sterlitamak',
        amountOfPeople: 1,
        babaysCat:
        {
            nameOfCat: 'Fenya',
            reaction: 'My Feniest Reaction'
        }
    },
    myCity:
    {
        nameOfCity: 'Kemerovo',
        amountOfPeople: 100000002
    }
}

delete someCountry.babaysCity.babaysCat.reaction

someCountry.babaysCity.babaysCat.color = 'Black'

console.log(someCountry.babaysCity)