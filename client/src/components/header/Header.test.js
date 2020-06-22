import React from 'react';
import Header from './Header';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

const renderer = new ShallowRenderer();

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Test the title appears', () => {
  const { unmount, getByText } = render(<Header />);
  expect(getByText('Visualize')).toBeInTheDocument();
  expect(getByText('CS')).toBeInTheDocument();
  unmount();
});

test('HTML structure is correct', () => {
  renderer.render(<Header />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  expect(result.props.children).toEqual(
    <div className="row header-bar align-items-center">
      <div className="col-12 align-item">
        Visualize<span id="CS">CS</span>
      </div>
    </div>
  );
});
