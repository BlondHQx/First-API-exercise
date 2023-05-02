function getPokemon(name) {
    let pokemons = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => {
            data.json()
                .then(res => {
                    displayCharac(res)
                })
        })
};

function displayCharac(elem) {
        let parent = document.querySelector('.card-container')
        let img = elem.sprites.front_shiny;
        let container = document.createElement('div')
        container.classList.add('pokemon-card');
        parent.appendChild(container)
        let sectionCard = document.createElement('section');
        sectionCard.classList.add('poke_card');
        container.appendChild(sectionCard);
        let imgPokemon = document.createElement('img')
        imgPokemon.src = img;
        sectionCard.appendChild(imgPokemon);
        let spanName = document.createElement('span');
        spanName.classList.add('span_card', 'name');
        spanName.innerText = elem.name;
        sectionCard.appendChild(spanName);
}

function search () {
    let elem = document.querySelector('#search_bar').value
    document.querySelector('#search_bar').value = '';
    getPokemon(elem)

}