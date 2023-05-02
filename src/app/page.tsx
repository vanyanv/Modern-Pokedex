'use client';
import { lazy, useEffect, useState } from 'react';
import Loading from '@/components/Loading';
const PokemonPage = lazy(() => import('../components/PokemonPage'));
const PokemonCards = lazy(() => import('@/components/PokemonCards'));
import HomeLayout from '@/components/layouts/HomeLayout';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider, useContextApi } from '@/context/Context';
export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );
      const data = await response.json();
      //the initial fetch request has links to other fetch requests
      //mapping thur the initial data then fetching more pokemon data
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
    <div>
      <ContextProvider>
        <HashRouter>
          <Routes>
            <Route path='/' element={<HomeLayout />}>
              <Route index element={<PokemonCards pokemon={pokemonList} />} />
              <Route
                path='/:id'
                element={<PokemonPage pokemon={pokemonList} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </ContextProvider>
    </div>
  );
}
