import React, { useState } from 'react';
const Pokedex = require("pokeapi-js-wrapper")

require('./search.css');
const customOptions = {
    cacheImages: true
}
const Pokemon = new Pokedex.Pokedex(customOptions)


const Search = ({ setData }) => {
    const [searchItem, setSearchItem] = useState("");

    const searchHandler = () => {
        Pokemon.getPokemonByName(searchItem.toLowerCase())
            .then(function (response) {
                setData(response);
            }).catch((error) => {
                console.log(searchItem);
                console.log(error);
                setData('')
            });
    }
    // };

    return (
        <div className='searchBar'>
            <input
                className='text-input'
                placeholder='Search for pokemon'
                type='text'
                value={searchItem}
                onChange={(e) => { setSearchItem(e.target.value) }}
            />
            <button className='btn' type="button" onClick={searchHandler}>Search</button>
        </div>
    );
}

export default Search;