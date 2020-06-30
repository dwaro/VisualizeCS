import React, { useState } from 'react';
import data from '../../data/sortingData.js';
import { Badge } from 'react-bootstrap';
import CodeSample from '../codeSample/CodeSample';
import Dropdown from '../dropdown/Dropdown';
import Image from '../image/Image';

const Description = (props) => {
  const [language, updateLanguage] = useState('java');

  let keyCounter = 0;

  return (
    <div className="jumbotron">
      <h1 className="display-4">{props.algorithm}</h1>
      <Badge pill className="pill">
        Runtime complexity: {data[props.algorithm].description.runtime}
      </Badge>{' '}
      <Badge pill className="pill">
        Space complexity: {data[props.algorithm].description.space}
      </Badge>
      <hr className="my-4" />
      {data[props.algorithm].description.details.map((p) => {
        return <p key={keyCounter++}>{p}</p>;
      })}
      <div className="row codeSample" style={{ marginTop: 40 }}>
        <div className="col-8 d-flex align-items-center">Code Sample</div>
        <div className="col-4 d-flex justify-content-end">
          <Dropdown
            defaultLabel={language}
            onClick={updateLanguage}
            data={['java', 'javascript']}
            className="teal-bg"
          />
        </div>
      </div>
      <CodeSample
        data={data[props.algorithm].code[language]}
        language={language}
      />
      <h3 style={{ marginTop: 40 }}>Example sort</h3>
      <hr />
      <div
        className="row justify-content-center"
        style={{ overflow: 'inherit' }}>
        <Image algorithm={props.algorithm} />
      </div>
    </div>
  );
};

export default Description;
