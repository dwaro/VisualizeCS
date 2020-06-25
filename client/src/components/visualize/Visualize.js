import React, { useState } from 'react';

const Visualize = (props) => {
  const [data, setData] = useState([5, 67, 23, 45, 21]);
  const [sorted, setSorted] = useState([]);
  const [steps, setSteps] = useState([]);

  const onChange = (data) => {
    setData(data.target.value);
  };

  const onSubmit = async () => {
    fetch(`/api/sort?algorithm=${props.algorithm}&data=${data.toString()}`)
      .then((res) => res.json()) // Transform the data into json
      .then((res) => {
        setSorted(res.data);
        setSteps(res.steps);
      })
      .catch((err) => {
        console.log('Error occured');
      });
  };

  console.log(data);

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
        <input type="submit" onClick={() => onSubmit()} />
      </div>
    </div>
  );
};

export default Visualize;
