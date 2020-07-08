import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as actions from '../../actions';
import Steps from '../steps/Steps';

const Visualize = (props) => {
  const [data, setData] = useState([5, 67, 23, 45, 21]);
  const [radio, setRadio] = useState('string');
  const [showSteps, setShowSteps] = useState(false);

  const onChange = (data) => {
    setData(data.target.value);
  };

  const onSubmit = async () => {
    setShowSteps(false);
    await props.sortData(
      `algorithm=${props.algorithm}&type=${radio}&data=${data.toString()}`
    );
    setShowSteps(true);
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
        <label htmlFor="string">String</label>
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
        <label htmlFor="number">Number</label>
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
        <Button
          onClick={() => onSubmit()}
          style={{ backgroundColor: 'rgb(1, 22, 39)' }}>
          Submit
        </Button>
      </div>
      {showSteps &&
      props.sortedData !== null &&
      props.sortedData.data.length > 0 ? (
        <Steps />
      ) : null}
    </div>
  );
};

function mapStateToProps({ sortedData }) {
  return { sortedData };
}

export default connect(mapStateToProps, actions)(Visualize);
