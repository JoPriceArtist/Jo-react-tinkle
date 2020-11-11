import React, { useState } from 'react';
import Wine from './Wine';

const WineList = (props) => {
  const wineData = [
    { name: 'MonteCigno', variety: 'Falanghina', classification: 'Dry White' },
    { name: 'Antico', variety: 'Malvasia', classification: 'Dry White' },
    {
      name: 'L"Amore delle Api',
      variety: 'Fiano',
      classification: 'Dry White',
    },
    { name: 'Pietra della Volpe', variety: 'Aglianico', type: 'Red' },
    { name: 'Blu Astro', variety: 'Piedirosso', type: 'Red' },
  ];
  const [currentYear, setCurrentYear] = useState(2020);
  const [wines, setWines] = useState(wineData);
  const myWineStyle = {
    margin: '15px',
    border: '1px solid',
    padding: '15px',
    backgroundColor: 'lightgrey',
  };
  return (
    <div>
      <div style={myWineStyle}>The Current Vintage is {currentYear} </div>
      {/* <div style={myWineStyle}>The Number of Wines available is {wines.length} </div>
      {wines.length < 8 && <div>Limited Reserve Wine</div>} */}
      {currentYear < 2012 && <div>Limited Reserve Wine</div>}
      {wines.map(w => <Wine name={w.name} variety={w.variety} classification={w.classification} /> )}

      {/* <Wine name="Falanghina" colour="white" />
      <Wine name="Fiano" colour="white" />
      <Wine name="Malvasia" colour="white" />
      <Wine name="Piedi Rosso" colour="red" /> */}
      <button onClick={() => setCurrentYear(currentYear - 1)}>
        Decrease Year
      </button>
    </div>
  );
};

export default WineList;
