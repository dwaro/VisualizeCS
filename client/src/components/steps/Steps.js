import React from 'react';

const Steps = (props) => {
  let stepCount = 1;
  let keyCounter = 0;
  return (
    <div style={{ margin: '40px 0px' }}>
      {props.steps.map((step) => {
        return (
          <div key={keyCounter++} style={{ margin: '40px 0px' }}>
            <h3>Pass {stepCount}</h3>
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
              Data at the end of pass {stepCount++}: [ {step[1].join(', ')} ]
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
