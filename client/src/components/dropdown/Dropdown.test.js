import React from 'react';
import Dropdown from './Dropdown';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom/extend-expect';

//import { render } from '@testing-library/react';

const renderer = new ShallowRenderer();

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

describe('Dropdown button rendering', () => {
  test('Dropdown renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dropdown data={['test1', 'test2']} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Dropdown button exists', () => {
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
  });
});

describe('Dropdown button functionality', () => {
  test('Click on dropdown displays algorithm menu options', () => {
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
    Simulate.click(dropdownBtn);

    const option1 = container.querySelector('[id=test1-dropdown]');
    expect(option1).toBeDefined();
    expect(option1.textContent).toBe('test1');

    const option2 = container.querySelector('[id=test2-dropdown]');
    expect(option2).toBeDefined();
    expect(option2.textContent).toBe('test2');
  });

  test('Clicking on dropdown options changes the algorithm', () => {
    const onClick = (e) => {
      expect(e).toBe('test1');
    };

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

    let dropdownBtn = container.querySelector('button');
    act(() => {
      Simulate.click(dropdownBtn, { bubbles: true });
    });

    const option1 = container.querySelector('[id=test1-dropdown]');
    act(() => {
      option1.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    console.log(container.querySelector('button'));
  });

  test('track the correct onClick callback is getting called with each option click', () => {
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

    let dropdownBtn = container.querySelector('button');
    act(() => {
      Simulate.click(dropdownBtn);
    });

    const option1 = container.querySelector('[id=test1-dropdown]');
    act(() => {
      Simulate.click(option1);
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
