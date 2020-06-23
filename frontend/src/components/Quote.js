import React from 'react';

function Quote({ textColor, quote, update }) {
  return (
    <div>
      <h1 style={{color: textColor}}>{quote}</h1>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default Quote;
