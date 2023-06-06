'use client'

import React from 'react';

import { HostedForm, useAcceptJs } from 'react-acceptjs';


const authData = {
  apiLoginID: '92gDrV9HsJ',
  clientKey: '5Sse7MujR83xe3d9cGL8x7sgNQLjaAa7qmmu6Z8ezLqdbDA7VM49buVn5DyyNFMz',
};



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
    console.log('Received response:', response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cardNumber"
        value={cardData.cardNumber}
        onChange={(event) =>
          setCardData({ ...cardData, cardNumber: event.target.value })
        }
      />
      <input
        type="text"
        name="month"
        value={cardData.month}
        onChange={(event) =>
          setCardData({ ...cardData, month: event.target.value })
        }
      />
      <input
        type="text"
        name="year"
        value={cardData.year}
        onChange={(event) =>
          setCardData({ ...cardData, year: event.target.value })
        }
      />
      <input
        type="text"
        name="cardCode"
        value={cardData.cardCode}
        onChange={(event) =>
          setCardData({ ...cardData, cardCode: event.target.value })
        }
      />
      <button type="submit" disabled={loading || error}>
        Pay
      </button>
    </form>
  );
};

export default App;