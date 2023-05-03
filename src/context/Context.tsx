'use client';
import React, { createContext, useState, useContext } from 'react';

interface ContextValue {
  call: string;
  toggleCall: (data: string) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

// create context
const Context = createContext<ContextValue | undefined>(undefined);

// create a provider
const ContextProvider = ({ children }: ContextProviderProps) => {
  const [call, setCall] = useState('limit=151&offset=0');

  const toggleCall = function (data: string) {
    setCall(data);
    console.log(call);
  };

  const value = { call, toggleCall };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// create a custom hook to access the context
const useContextApi = () => useContext(Context)!;

export { Context, ContextProvider, useContextApi };
