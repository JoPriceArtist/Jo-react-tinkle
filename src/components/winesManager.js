import React, { useState } from 'react';
import WineForm from './wineForm';
import WineList from './WineList';

const WinesManager = () => {
  const wineData = [
    { name: 'MonteCigno', variety: 'Falanghina', colour: 'White' },
    { name: 'Antico', variety: 'Malvasia', colour: 'White' },
    { name: 'L"Amore delle Api', variety: 'Fiano', colour: 'White' },
    { name: 'Pietra della Volpe', variety: 'Aglianico', colour: 'Red' },
    { name: 'Blu Astro', variety: 'Piedirosso', colour: 'Red' },
  ];

  const [wines, setWines] = useState(wineData);
  const addWine = (newWine) => {
    console.log(newWine);
    const newWineList = [...wines, newWine]
    setWines(newWineList)
  };

  if (!wines) {
    return <div>no wines available</div>;
  }
  return (
    <>
      <WineForm handleClick={addWine} />
      <WineList wines={wines.filter(x => x.colour === 'White')} />
      <WineList wines={wines.filter(x => x.colour === 'Red')} />
      <WineList wines={wines.filter(x => x.colour !== 'white' && x.colour !== 'red')} />
    </>
  );
};

export default WinesManager;
