const poke_container = document.querySelector('#poke_container');
const pokemonStats = document.querySelector(".pokemon-stats");
const pokemons_number = 151;
const colors = {
    fire: '#F57D31',
    grass: '#74CB48',
    electric: '#F9CF30',
    water: '#6493EB',
    ground: '#DEC16B',
    rock: '#B69E31',
    fairy: '#E69EAC',
    poison: '#A43E9E',
    bug: '#A7B723',
    dragon: '#7037FF',
    psychic: '#FB5584',
    flying: '#A891EC',
    fighting: '#C12239',
    normal: '#AAA67F'
};

const main_types = Object.keys(colors);

console.log(main_types);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
}

/* API */
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
}

fetchPokemons();

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('button');
    pokemonEl.classList.add('pokemon');

    const poke_types = pokemon.types.map(el => el.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl)

    pokemonEl.addEventListener('click', function () {
        console.log(`${pokemon.abilities[0].ability.name}`)
        console.log(`${pokemon.abilities[1].ability.name}`)
        console.log(`${pokemon.height}`)
        console.log(`${pokemon.weight}`)
        console.log(`${pokemon.stats[0].base_stat}`)
        console.log(`${pokemon.stats[1].base_stat}`)
        console.log(`${pokemon.stats[2].base_stat}`)
        console.log(`${pokemon.stats[3].base_stat}`)
        console.log(`${pokemon.stats[4].base_stat}`)
        console.log(`${pokemon.stats[5].base_stat}`)
    })

}









