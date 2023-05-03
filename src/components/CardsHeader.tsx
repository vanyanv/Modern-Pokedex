import React from 'react';
import { useContextApi } from '@/context/Context';
const tabs = [
  { name: 'Kanto', href: '#', current: false, call: 'limit=151&offset=0' },
  { name: 'Johto', href: '#', current: false, call: 'limit=100&offset=151' },
  { name: 'Hoenn', href: '#', current: false, call: 'limit=135&offset=251' },
  { name: 'Sinnoh', href: '#', current: false, call: 'limit=151&offset=386' },
  //   { name: 'Unova', href: '#', current: false, call: 'limit=151&offset=537' },
  //   { name: 'Kalos', href: '#', current: false, call: 'limit=151&offset=700' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CardsHeader() {
  const { toggleCall } = useContextApi();

  const call = 'limit=100&offset=151';
  return (
    <div className='p-3 border-b border-gray-100'>
      <div className='sm:flex sm:items-baseline'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>
          Regions
        </h3>
        <div className='mt-4 sm:ml-10 sm:mt-0'>
          <nav className='-mb-px flex space-x-8'>
            {tabs.map((tab) => (
              <a
                onClick={() => toggleCall(tab.call)}
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
