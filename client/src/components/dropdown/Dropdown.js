import React from 'react';
import { Dropdown as DD } from 'react-bootstrap';

const Dropdown = (props) => {
  let keyCounter = 0;

  let style =
    props.class === 'pink-bg'
      ? {
          backgroundColor: 'rgb(247, 140, 108)',
          borderColor: 'rgb(247, 140, 108)',
        }
      : {
          backgroundColor: 'rgb(1, 22, 39)',
          borderColor: 'rgb(1, 22, 39)',
        };

  return (
    <DD>
      <DD.Toggle variant="secondary" id="DD-basic" style={style}>
        {props.algorithm}
      </DD.Toggle>
      <DD.Menu>
        {props.data.map((selection) => {
          return (
            <DD.Item
              key={keyCounter++}
              id={`${selection.split(' ').join('')}-dropdown`}
              onClick={() => props.onClick(selection)}>
              {selection}
            </DD.Item>
          );
        })}
      </DD.Menu>
    </DD>
  );
};

export default Dropdown;
