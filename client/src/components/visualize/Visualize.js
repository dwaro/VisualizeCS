import React, { useState } from 'react';
import Steps from '../steps/Steps';

const Visualize = (props) => {
  const [data, setData] = useState([5, 67, 23, 45, 21]);
  const [sorted, setSorted] = useState([]);
  const [steps, setSteps] = useState([]);
  const [radio, setRadio] = useState('string');

  const onChange = (data) => {
    setData(data.target.value);
  };

  const onSubmit = async () => {
    fetch(
      `/api/sort?algorithm=${
        props.algorithm
      }&type=${radio}&data=${data.toString()}`
    )
      .then((res) => res.json()) // Transform the data into json
      .then((res) => {
        setSorted(res.data);
        setSteps(res.steps);
      })
      .catch((err) => {
        console.log('Error occured');
      });
  };

  const onRadioClick = (type) => {
    setRadio(type);
  };

  return (
    <div>
      <h3>Visualize {props.algorithm} on your data</h3>
      <br />
      <div className="row justify-content-center" style={{ marginBottom: 25 }}>
        <textarea
          rows="5"
          cols="60"
          defaultValue="Enter your data here, with each value separated by a comma. For example: 5, 67, 23, 45, 21"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="row justify-content-center">
        <span style={{ fontWeight: 'bold', paddingRight: 10 }}>
          Process as:{' '}
        </span>{' '}
        <label for="string">String</label>
        <input
          type="radio"
          id="string"
          name="type"
          value=""
          className="radio"
          defaultChecked
          onClick={() => onRadioClick('string')}
        />
        <br />
        <label for="number">Number</label>
        <input
          type="radio"
          id="number"
          name="type"
          value=""
          className="radio"
          onClick={() => onRadioClick('number')}
        />
        <br />
      </div>
      <div className="row justify-content-center">
        <input type="submit" onClick={() => onSubmit()} />
      </div>
      {sorted.length > 0 ? (
        <Steps data={sorted} raw={data} steps={steps} />
      ) : null}
    </div>
  );
};

export default Visualize;
