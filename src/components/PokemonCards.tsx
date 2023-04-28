import Image from 'next/image';
import { Link } from 'react-router-dom';

export default function PokemonCards(props) {
  const pokemons = props.pokemon;

  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    >
      {pokemons.map((pokemon) => (
        <li
          key={pokemon.id}
          className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:animate-pulse'
        >
          <Link to={`/${pokemon.id}`}>
            <div className='flex flex-1 flex-col p-8'>
              <Image
                className='mx-auto h-32 w-32 flex-shrink-0 rounded-full'
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                height={32}
                width={32}
              />
              <h3 className='mt-6 text-sm font-medium text-gray-900'>
                {pokemon.name}
              </h3>
              <dl className='mt-1 flex flex-grow flex-col justify-between'>
                <dt className='sr-only'>Title</dt>
                <dd className='text-sm text-gray-500'>Something</dd>
                <dt className='sr-only'>Role</dt>
                <dd className='mt-3'>
                  {pokemon.types.map((type, index) => (
                    <span
                      key={index}
                      className={`m-2 inline-flex items-center rounded-full bg-${type.type.name} px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20`}
                    >
                      {type.type.name}
                    </span>
                  ))}
                  {/* <span className='inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                  {person.role}
                </span> */}
                </dd>
              </dl>
            </div>
            <div>
              {/* <div className='-mt-px flex divide-x divide-gray-200'>
              <div className='flex w-0 flex-1'>
                <a
                  href={`mailto:${person.email}`}
                  className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
                >
                  <EnvelopeIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  Email
                </a>
              </div>
              <div className='-ml-px flex w-0 flex-1'>
                <a
                  href={`tel:${person.telephone}`}
                  className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
                >
                  <PhoneIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  Call
                </a>
              </div>
            </div> */}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
