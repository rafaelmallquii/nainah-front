"use client";

import React from "react";

import { HostedForm, useAcceptJs } from "react-acceptjs";

const authData = {
  apiLoginID: "92gDrV9HsJ",
  clientKey: "5Sse7MujR83xe3d9cGL8x7sgNQLjaAa7qmmu6Z8ezLqdbDA7VM49buVn5DyyNFMz",
};

<<<<<<< HEAD
const BasicCardInfo = {
  cardNumber: 4111111111111111,
  cardCode: 123,
  month: 12,
  year: 25,
};

const App = () => {
  const { dispatchData, loading, error } = useAcceptJs({ authData });
  const [cardData, setCardData] = React.useState(BasicCardInfo);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Dispatch CC data to Authorize.net and receive payment nonce for use on your server
    const response = await dispatchData({ cardData });
    console.log("Received response:", response);
=======

const App = () => {
  const handleSubmit = (response) => {
    console.log('Received response:', response);
>>>>>>> fd68a8846f5781e1448a6ffba4fddd5df1092ce0
  };
  return <HostedForm authData={authData} onSubmit={handleSubmit} />;
};

export default App;
