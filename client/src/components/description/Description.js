import React from 'react';
import data from '../../data/sortingData.js';

const getContent = (algo) => {
  let keyCounter = 0;
  return (
    <div>
      <ul>
        <li>Runtime complexity: {data[algo].description.runtime}</li>
        <li>Space complexity: {data[algo].description.space}</li>
      </ul>
      {data[algo].description.details.map((p) => {
        return <p key={keyCounter++}>{p}</p>;
      })}
      <div className="codeSample">Code Sample</div>
      <pre>
        <code>{data[algo].code}</code>
      </pre>
    </div>
  );
};

const Description = (props) => {
  return (
    <div>
      <h1>{props.algorithm}</h1>
      {getContent(props.algorithm)}
    </div>
  );
};

export default Description;
