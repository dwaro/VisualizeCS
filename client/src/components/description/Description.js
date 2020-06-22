import React from 'react';

const getContent = (algo) => {
  return <div>Content introduction placeholder</div>;
};

const getImage = (algo) => {
  return <div>Image placeholder</div>;
};

const getCode = (algo) => {
  return <div>Code placeholder</div>;
};

const Description = (props) => {
  return (
    <div>
      <h1>{props.algorithm}</h1>
      {getContent(props.algorithm)}
      {getImage(props.algorithm)}
      {getCode(props.algorithm)}
    </div>
  );
};

export default Description;
