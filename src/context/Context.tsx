'use client';
import React, { createContext, useState, useContext } from 'react';

//create context
const Context = createContext();

//create a provider
const ContextProvider = ({ children }) => {
  const [call, setCall] = useState('limit=151&offset=0');

  const toggleCall = function (data) {
    setCall(data);
    console.log(call);
  };

  return (
    <Context.Provider value={{ call, toggleCall }}>{children}</Context.Provider>
  );
};

//create a custom hook to access the context
const useContextApi = () => useContext(Context);

export { Context, ContextProvider, useContextApi };
