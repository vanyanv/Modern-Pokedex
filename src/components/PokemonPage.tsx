import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'next/image';
import Stats from './Stats';
const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    {
      name: 'Washed Black',
      bgColor: 'bg-gray-700',
      selectedColor: 'ring-gray-700',
    },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    {
      name: 'Washed Gray',
      bgColor: 'bg-gray-500',
      selectedColor: 'ring-gray-500',
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
};

// {abilities: Array(2), base_experience: 64, forms: Array(1), game_indices: Array(20), height: 7, …}
// abilities
// :
// (2) [{…}, {…}]
// base_experience
// :
// 64
// forms
// :
// [{…}]
// game_indices
// :
// (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// height
// :
// 7
// held_items
// :
// []
// id
// :
// 1
// is_default
// :
// true
// location_area_encounters
// :
// "https://pokeapi.co/api/v2/pokemon/1/encounters"
// moves
// :
// (83) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name
// :
// "bulbasaur"
// order
// :
// 1
// past_types
// :
// []
// species
// :
// {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/'}
// sprites
// :
// {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', …}
// stats
// :
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// types
// :
// (2) [{…}, {…}]
// weight
// :
// 69

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PokemonPage(props) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const { id } = useParams();
  const pokemonId = Number(id) - 1;
  const pokemonData = props.pokemon;
  const pokemon = pokemonData[pokemonId];
  console.log(pokemon);
  return (
    <div className='bg-white mx-auto max-w-7xl sm:px-6 lg:px-8 rounded'>
      {/* Content goes here */}

      <Image
        className='mx-auto'
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={400}
        height={400}
      />
      <h1 className='text-black text-center text-xl font-medium'>
        {pokemon.name}
      </h1>
      <dd className='mt-3 mb-1 flex justify-center'>
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className={`m-2 inline-flex items-center rounded-full bg-${type.type.name} px-3 py-1 text-l font-medium text-green-700 ring-1 ring-inset ring-green-600/20`}
          >
            {type.type.name}
          </span>
        ))}
      </dd>
      <Stats stats={pokemon.stats} />
    </div>
  );
}
