// https://pokeapi.co/api/v2/pokemon/26

const buttonSearch = document.getElementsByClassName('button-search')[0];
const buttonInfo = document.getElementsByClassName('button-info')[0];
const buttonClose = document.getElementsByClassName('close')[0];

const pokemonInfo = document.getElementById('pokemon-info');


buttonSearch.addEventListener('click', () => {

    var pokeNumber = Number(document.getElementsByClassName('poke-number')[0].value);

    console.log(pokeNumber)

    fetchDataApi(pokeNumber); 
    changeAudio(pokeNumber);

})


buttonInfo.addEventListener('click', () => {
    console.log('clicou')
    pokemonInfo.classList.toggle('disabled');
})




buttonClose.addEventListener('click', () => {
    pokemonInfo.classList.toggle('disabled');
})


const fetchDataApi = (pokeNumber) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`;

    if (pokeNumber <= 0 || pokeNumber == null) {
        return;
    
    } else {
        fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            // console.log(data.forms[0].name);     NAME
            // console.log(data.types[0].type.name);        TYPE
            // console.log(data.weight);        WEIGHT  
            // console.log(data.height);        HEIGHT
            // console.log(data.sprites.front_default);     IMAGE


            printDataInScreen(data);
            
        })
    }
}


const printDataInScreen = (data) => {
    let pokeName = document.getElementById('poke-name'); 

    console.log(pokeName);

    let pokeImage = document.getElementsByClassName('poke-image')[0];

    let pokeNameCard = document.getElementById('name');
    
    const pokeNumber = Number(document.getElementsByClassName('poke-number')[0].value);

    let pokeType = document.getElementById('type'); 
    let pokeWeight = document.getElementById('weight'); 
    let pokeHeight = document.getElementById('height'); 

    let pokeImageInfo = document.getElementsByClassName('poke-image-info')[0];


    pokeName.innerText =  `${pokeNumber} - ${data.forms[0].name}`; 
    pokeImage.src = data.sprites.front_default;

    pokeType.innerHTML = `Type: <strong>${data.types[0].type.name}</strong>`;
    pokeWeight.innerHTML = `Weight: <strong> ${data.weight}</strong>`;
    pokeHeight.innerHTML = `Height: <strong> ${data.height}</strong>`;
    
    pokeImageInfo.src = `${data.sprites.front_default}`;
    
    pokeNameCard.innerText = `${data.forms[0].name}`;

}

const changeAudio = (pokeNumber) => {
    const audio = document.getElementsByTagName('audio');
    audio[0].src = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokeNumber}.ogg`;
}




