import React from 'react';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Pre = styled.pre`
  text-align: left;
  padding: 0.5em;
  overflow-x: inherit;
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

const CodeSample = (props) => {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.data.trim()}
      language={props.language}>
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
  );
};

export default CodeSample;
