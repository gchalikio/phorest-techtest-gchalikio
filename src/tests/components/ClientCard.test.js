import { render, screen } from '@testing-library/react';
import { client } from 'tests/fixtures';
import ClientCard from 'components/ClientCard';

const renderElement = <ClientCard client={client} />;

test('renders client info', () => {
  render(renderElement);

  const name = screen.getByText(`${client.firstName} ${client.lastName}`);
  expect(name).toBeInTheDocument();

  const email = screen.getByText(client.email);
  expect(email).toBeInTheDocument();

  const phone = screen.getByText(client.mobile);
  expect(phone).toBeInTheDocument();
});
