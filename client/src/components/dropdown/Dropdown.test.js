import React from 'react';
import Dropdown from './Dropdown';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom/extend-expect';

//import { render } from '@testing-library/react';

const renderer = new ShallowRenderer();

test('Dropdown renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dropdown data={['test1', 'test2']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Testing algorithm name', () => {
  const onClick = jest.fn();

  act(() => {
    render(
      <Dropdown
        onClick={onClick}
        algorithm="Choose Algorithm"
        data={['test1', 'test2']}
      />,
      container
    );
  });

  const dropdownBtn = container.querySelector('button');
  expect(dropdownBtn.textContent).toEqual('Choose Algorithm');

  act(() => {
    dropdownBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
});
