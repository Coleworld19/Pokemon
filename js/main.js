const getData = async (pokemon) => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response);
    return response.data;
}

let form = document.querySelector('#pokeDataForm')


const loadData = async (event) => {
    event.preventDefault();
    console.log(event)
    let poke = event.target[1].value.toLowerCase()
    console.log(poke)
    let data = await getData(poke)
    console.log(data)
    createPokeHTML(data)
}

const createPokeHTML = (pokemon) =>{
    let pokeDisplay = document.getElementsByClassName('pokemonDisplay')[0];
    pokeDisplay.innerHTML = '';

    let pokeName = document.createElement('h3');
    pokeName.innerHTML = 'Name: ' + pokemon.name;
    pokeDisplay.insertAdjacentElement('beforeend', pokeName);

    let pokeHeight = document.createElement('h3');
    pokeHeight.innerHTML = 'Height: ' + pokemon.height;
    pokeDisplay.insertAdjacentElement('beforeend', pokeHeight);

    let pokeWeight = document.createElement('h3');
    pokeWeight.innerHTML = 'Weight: ' + pokemon.weight;
    pokeDisplay.insertAdjacentElement('beforeend', pokeWeight);


    let pokeBase_experience = document.createElement('h3');
    pokeBase_experience.innerHTML = 'Base_Experience: ' + pokemon.Base_experience;
    pokeDisplay.insertAdjacentElement('beforeend', pokeBase_experience);


    let pokeImg = document.createElement('Img');
    pokeImg.src = pokemon.sprites.front_default;
    pokeDisplay.insertAdjacentElement('beforeend',pokeImg) 

}


form.addEventListener('submit',loadData);
