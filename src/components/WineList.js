import React, { useState } from 'react';
import Wine from './Wine';

const WineList = ({ wines }) => {
  const [currentYear, setCurrentYear] = useState(2020);
  const myWineStyle = {
    margin: '15px',
    border: '1px solid',
    padding: '15px',
    backgroundColor: 'lightgrey',
  };

  if(!wines || !wines.length) {
    return(<div>you have no wines</div>)
  }

  return (
    <div>
      <div style={myWineStyle}>The Current Vintage is {currentYear} </div>
      <button onClick={() => setCurrentYear(currentYear - 1)}>
        Decrease Year
      </button>
      {/* <div style={myWineStyle}>The Number of Wines available is {wines.length} </div>
      {wines.length < 8 && <div>Limited Reserve Wine</div>} */}
      {currentYear < 2012 && <div>Limited Reserve Wine</div>}
      {wines.map((w) => (
        <Wine name={w.name} variety={w.variety} colour={w.colour} />
      ))}
    </div>
  );
};
export default WineList;
