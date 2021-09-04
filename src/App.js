import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import { getAllPokemon, getPokemon } from './services/pokemon';
import Pokemon from './components/Card';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() =>{
    async function fetchData() {
      let res = await getAllPokemon(initialUrl);
      setNextUrl(res.next);
      setPrevUrl(res.previous);
      await loadingPokemon(res.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  const prev = async () => {
    setLoading(true);
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  const loadingPokemon = async data => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
  }

  console.log(pokemonData)

  return (
      <div className="App">
        {
        loading ? ( 
        <h1>Cargando...</h1> ) : (
          <>
          < Header />
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
            <div className="pokemon_list">
              {pokemonData.map((pokemon, i) => {
                return <Pokemon key={i} pokemon={pokemon}/>
              })}
            </div>
            <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
          </>
        )
        }
      </div>
  );
}

export default App;
