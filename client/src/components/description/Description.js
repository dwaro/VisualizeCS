import React, { useState } from 'react';
import data from '../../data/sortingData.js';
import CodeSample from '../codeSample/CodeSample';
import Dropdown from '../dropdown/Dropdown';

const Description = (props) => {
  const [language, updateLanguage] = useState('java');
  let keyCounter = 0;
  return (
    <div>
      <h1>{props.algorithm}</h1>
      <div>
        <ul>
          <li>
            <b>Runtime complexity</b>:{' '}
            {data[props.algorithm].description.runtime}
          </li>
          <li>
            <b>Space complexity</b>: {data[props.algorithm].description.space}
          </li>
        </ul>
        {data[props.algorithm].description.details.map((p) => {
          return <p key={keyCounter++}>{p}</p>;
        })}
        <div className="row codeSample">
          <div className="col-8 d-flex align-items-center">Code Sample</div>
          <div className="col-4 d-flex justify-content-end">
            <Dropdown
              defaultLabel={language}
              onClick={updateLanguage}
              data={['java', 'javascript']}
              class="teal-bg"
            />
          </div>
        </div>
        <CodeSample
          data={data[props.algorithm].code[language]}
          language={language}
        />
      </div>
    </div>
  );
};

export default Description;
