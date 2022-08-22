import { render, screen } from '@testing-library/react';
import { clients, mock } from 'tests/fixtures';
import ClientList from 'components/ClientList';

function renderElement(searched, clientsToRender) {
  return (
    <ClientList
      clients={clientsToRender}
      setStep={mock}
      setSelectedClient={mock}
      searched={searched}
    />
  );
}

test('when user has not searched yet', () => {
  render(renderElement(false, []));
  const element = screen.queryByText(/Select a Client/i);
  expect(element).not.toBeInTheDocument();
});

test('when user searched but there are no clients', () => {
  render(renderElement(true, []));

  const element = screen.queryByText(/Select a Client/i);
  expect(element).not.toBeInTheDocument();

  const element2 = screen.getByText(
    /No clients found for these search criteria/i
  );
  expect(element2).toBeInTheDocument();
});

test('when user searched and there are clients', () => {
  render(renderElement(true, clients));

  const element = screen.getByText(/Select a Client/i);
  expect(element).toBeInTheDocument();

  const clientCards = screen.getAllByText(/Email/i);
  expect(clientCards).toHaveLength(2);
});
