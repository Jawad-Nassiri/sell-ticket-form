const statesData = {
  newYork: ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse'],
  california: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'],
  texas: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'],
  florida: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Tallahassee'],
  washington: ['Seattle', 'Spokane', 'Tacoma', 'Olympia', 'Bellevue'],
  illinois: ['Chicago', 'Springfield', 'Naperville', 'Peoria', 'Rockford'],
  ohio: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
  georgia: ['Atlanta', 'Savannah', 'Augusta', 'Macon', 'Athens'],
  arizona: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale', 'Tempe'],
  colorado: ['Denver', 'Colorado Springs', 'Aurora', 'Boulder', 'Fort Collins']
};

const statesContainerElem = document.querySelector('#states')
const citiesContainerElem = document.querySelector('#cities')

const mainStates = Object.keys(statesData)

let states = ''

mainStates.forEach(state => {
    states += `<option value="${state}">${state}</option>`
})

statesContainerElem.innerHTML = states


function showCities () {

    let mainCities = statesData[statesContainerElem.value]
    
    let cities = ''

    mainCities.forEach(city => {
        cities += `<option value="${city}">${city}</option>`
    })

    citiesContainerElem.innerHTML = cities
}

showCities ()


statesContainerElem.addEventListener('change', showCities)


