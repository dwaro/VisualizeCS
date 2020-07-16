import React from 'react';
import BubbleSort from '../../data/images/bubbleSort.png';
import SelectionSort from '../../data/images/selectionSort.png';
import CountingSort from '../../data/images/countingSort.png';
import Default from '../../data/images/default.png';

/**
 * getImage returns an image given an imageDescription
 *
 * @param {string} imageDescription - The specific image we want to display in the description panel
 */
const getImage = (imageDescription) => {
  switch (imageDescription) {
    case 'Bubble Sort':
      return BubbleSort;
    case 'Selection Sort':
      return SelectionSort;
    case 'Counting Sort':
      return CountingSort;
    default:
      return Default;
  }
};

/**
 * The Image function returns the Image component, a component to display an
 * image describing a specific algorithm
 *
 * @param {Object} props - Object containing properties from the Description component for the respective page.
 * @param {string} props.algorithm - The specific algorithm for which we need to display the image of.
 */
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
