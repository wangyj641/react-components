import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Toggle from './Toggle';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('toggle', () => {
  const { container } = render(<Toggle />);
  expect(container.querySelector('p')?.textContent).toBe('close');
  fireEvent.click(container.querySelector('button')!);
  expect(container.querySelector('p')?.textContent).toBe('open');
  // await waitFor(
  //   () => expect(container.querySelector('p')?.textContent).toBe('open'),
  //   {
  //     timeout: 3000
  //   }
  // );
});
