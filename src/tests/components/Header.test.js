import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';

test('renders', () => {
  render(<Header />, { wrapper: BrowserRouter });
  const element = screen.getByTestId('nav');
  expect(element).toBeInTheDocument();
});
