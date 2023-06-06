'use client'

import React from 'react';

import { HostedForm, useAcceptJs } from 'react-acceptjs';


const authData = {
  apiLoginID: '92gDrV9HsJ',
  clientKey: '5Sse7MujR83xe3d9cGL8x7sgNQLjaAa7qmmu6Z8ezLqdbDA7VM49buVn5DyyNFMz',
};


const App = () => {
  const handleSubmit = (response) => {
    console.log('Received response:', response);
  };
  return <HostedForm authData={authData} onSubmit={handleSubmit} />;
};

export default App;