window.onload = () => {
    document.querySelector("#submit").addEventListener("click", getNewPokemon);
}


function getNewPokemon() {
    /* 
        1. Make a call to an API _DONE_
        2. Wait for the API to respond _DONE_
        3. Get the response data _DONE_
        4. Put the response data in the HTML
    */   

    let pokemonName = document.querySelector("#pokemon-input").value;
    getPokemon(pokemonName).then(resultJson => {
        // alert(JSON.stringify(resultJson));
        populateHTML(resultJson);
    });  //now, it's asynchronous
}

async function getPokemon(pokemonName) {
    let endpoint = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    // let endpoint = "https://pokeapi.co/api/v2/pokemon/ditto";   
    let req = new Request(endpoint);
    let response = await fetch(req);
    // let response = fetch(req).then(result => {
    //     alert(JSON.stringify(result));
    // if I don't want to use 'async wait'
    // }; 
    //console.log(response);
    return response.json();
}

function populateHTML(pkmJson) {
    let header = document.querySelector("#pokemon-name");
    let img = document.querySelector("#pokemon-sprite");
    // header.innerHTML = "Success!";

    header.innerHTML = getPokemonName(pkmJson);
    img.setAttribute("src", getPokemonSprite(pkmJson));
}

function getPokemonName (pkmJson) {
    return capitalize(pkmJson.name);
    //return pkmJson.name; 
}

function getPokemonSprite(pkmJson) {   
    return pkmJson["sprites"]["front_shiny"];  
    // return pkmJson.sprites.front_shiny;    This one is okay,too. 
    
}
    
function capitalize(string) {
    // substring(0,1); 1st character
    // toUpperCase(); capital letter
    let start = string.substring(0,1).toUpperCase();

    // From 2nd character until the end of character, lower case
    let body = string.substring(1).toLowerCase();
    
    return start + body;
}