import React from 'react';

const Steps = (props) => {
  let stepCount = 1;
  let keyCounter = 0;
  let numSwaps = (function () {
    let count = 0;
    for (let step of props.steps) {
      let steps = step[0];
      count += steps.length;
    }
    return count;
  })();

  return (
    <div style={{ margin: '40px 0px' }}>
      <div className="step">
        <span className="blue-text" style={{ fontSize: '1.5rem' }}>
          Starting data
        </span>
        : <span className="pink-text">[</span> {props.raw}{' '}
        <span className="pink-text">]</span>
        <ul>
          <li>Total number of swaps: {numSwaps}</li>
        </ul>
      </div>
      {props.steps.map((step) => {
        return (
          <div
            className="step"
            key={keyCounter++}
            style={{ margin: '40px 0px' }}>
            <h3 className="blue-text">Pass {stepCount}</h3>
            {step[0].length === 0 ? (
              <div style={{ paddingLeft: 40, marginBottom: '1rem' }}>
                No more swaps
              </div>
            ) : (
              <ul>
                {step[0].map((swap) => {
                  return <li key={keyCounter++}>{swap}</li>;
                })}
              </ul>
            )}
            <div style={{ paddingLeft: 40 }}>
              <span className="teal-text">Data</span> at the end of pass{' '}
              <span className="teal-text">{stepCount++}</span>:{' '}
              <span className="pink-text">[</span>{' '}
              {step[1].map((val) => {
                return (
                  <span key={keyCounter++}>
                    {val}
                    <span className="teal-text">, </span>
                  </span>
                );
              })}
              <span className="pink-text">]</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
