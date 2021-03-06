import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Steps = (props) => {
  let stepCount = 1;
  let keyCounter = 0;

  return (
    <div style={{ margin: '40px 0px' }}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={900}
        unmountOnExit={true}
        key={keyCounter++}
        classNames="step">
        <div className="step">
          <span className="blue-text" style={{ fontSize: '1.5rem' }}>
            Starting data
          </span>
          : <span className="pink-text">[</span>{' '}
          {props.sortedData.raw.join(', ')} <span className="pink-text">]</span>
          {props.sortedData.numSwaps !== -1 ? (
            <ul>
              <li>Total number of swaps: {props.sortedData.numSwaps}</li>
            </ul>
          ) : null}
        </div>
      </CSSTransition>
      <TransitionGroup>
        {props.sortedData.steps.map((step) => {
          return (
            <CSSTransition
              in={true}
              appear={true}
              timeout={900}
              unmountOnExit={true}
              key={keyCounter++}
              classNames="step">
              <div
                className="step"
                key={keyCounter++}
                style={{ margin: '40px 0px' }}>
                <h3 className="blue-text">Pass {stepCount}</h3>
                {step[0].length === 0 ? (
                  <div style={{ paddingLeft: 40, marginBottom: '1rem' }}>
                    No swaps
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
                  <span className="pink-text">[</span> {step[1].join(', ')}
                  <span className="pink-text"> ]</span>
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

function mapStateToProps({ sortedData }) {
  return { sortedData };
}

export default connect(mapStateToProps, null)(Steps);
