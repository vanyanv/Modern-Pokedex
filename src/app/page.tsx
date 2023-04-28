'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import PokemonCards from '@/components/PokemonCards';
import Loading from '@/components/Loading';
import PokemonPage from '@/components/PokemonPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );
      const data = await response.json();
      const promises = data.results.map((pokemon) => {
        return fetch(pokemon.url).then((res) => res.json());
      });
      Promise.all(promises).then((results) => {
        setPokemonList(results);
        setLoading(false);
      });
    }
    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className='min-h-full p-20'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokemonCards pokemon={pokemonList} />} />
          <Route path='/:id' element={<PokemonPage pokemon={pokemonList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
