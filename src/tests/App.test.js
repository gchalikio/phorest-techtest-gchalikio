import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders', () => {
  render(<App />);
  const element = screen.getByTestId('app');
  expect(element).toBeInTheDocument();
});
