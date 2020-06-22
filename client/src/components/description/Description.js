import React from 'react';
import data from '../../data/sortingData.js';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Pre = styled.pre`
  text-align: left;
  padding: 0.5em;
  overflow-x: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const getContent = (algo) => {
  let keyCounter = 0;

  return (
    <div>
      <ul>
        <li>Runtime complexity: {data[algo].description.runtime}</li>
        <li>Space complexity: {data[algo].description.space}</li>
      </ul>
      {data[algo].description.details.map((p) => {
        return <p key={keyCounter++}>{p}</p>;
      })}
      <div className="codeSample">Code Sample</div>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={data[algo].code.trim()}
        language="java">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </div>
  );
};

const Description = (props) => {
  return (
    <div>
      <h1>{props.algorithm}</h1>
      {getContent(props.algorithm)}
    </div>
  );
};

export default Description;
