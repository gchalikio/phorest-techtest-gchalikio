import { render, screen } from '@testing-library/react';
import Home from 'pages/Home';
import { BrowserRouter } from 'react-router-dom';

test('renders Get Started link', () => {
  render(<Home />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Get Started/i);
  expect(linkElement).toBeInTheDocument();
});
