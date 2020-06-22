import React from 'react';
import data from '../../data/sortingData.js';
import CodeSample from '../codeSample/CodeSample';

const Description = (props) => {
  let keyCounter = 0;
  return (
    <div>
      <h1>{props.algorithm}</h1>
      <div>
        <ul>
          <li>
            Runtime complexity: {data[props.algorithm].description.runtime}
          </li>
          <li>Space complexity: {data[props.algorithm].description.space}</li>
        </ul>
        {data[props.algorithm].description.details.map((p) => {
          return <p key={keyCounter++}>{p}</p>;
        })}
        <div className="codeSample">Code Sample</div>
        <CodeSample data={data[props.algorithm].code} language="java" />
      </div>
    </div>
  );
};

export default Description;
