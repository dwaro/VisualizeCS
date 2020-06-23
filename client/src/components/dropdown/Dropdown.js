import React from 'react';
import { Dropdown as DD } from 'react-bootstrap';

const Dropdown = (props) => {
  let keyCounter = 0;
  return (
    <DD>
      <DD.Toggle variant="secondary" id="DD-basic">
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
