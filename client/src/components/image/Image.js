import React from 'react';
import BubbleSort from '../../data/images/bubbleSort.png';

const getImage = (description) => {
  switch (description) {
    case 'Bubble Sort':
      return BubbleSort;
    default:
      return BubbleSort;
  }
};

const Image = (props) => {
  return (
    <img
      style={{ margin: 10 }}
      src={getImage(props.algorithm)}
      id="desc-img"
      alt="example algorithm"
    />
  );
};

export default Image;
