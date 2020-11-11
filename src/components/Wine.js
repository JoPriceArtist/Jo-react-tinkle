import React from 'react';

const Wine = (props) => {
  // console.log(props);
  const myStyle = {
    padding: '15px',
    margin: '15px',
    border: '1px solid',
  };
  return (
    <div style={myStyle}>
      {' '}
      Wine {props.name || 'unknown'}, Type: {props.colour}{' '}
    </div>
  );
};

export default Wine;
