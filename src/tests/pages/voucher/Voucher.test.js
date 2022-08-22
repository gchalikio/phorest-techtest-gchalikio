/**

Integration Test

**/
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act
} from '@testing-library/react';
import API from 'config/api';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Voucher from 'pages/voucher/Voucher';
import { BrowserRouter } from 'react-router-dom';
import { client, clients, mock, voucher } from 'tests/fixtures';

const server = setupServer(
  rest.get(`${API.URL}${API.BUSINESS_ID}/client`, (req, res, ctx) => {
    return res(
      ctx.json({
        _embedded: { clients: [clients[0]] },
        page: {
          size: 1
        }
      })
    );
  }),

  rest.post(`${API.URL}${API.BUSINESS_ID}/voucher`, (req, res, ctx) => {
    return res(ctx.json(voucher));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderElement = <Voucher />;

test('renders', () => {
  render(renderElement, { wrapper: BrowserRouter });
  const element = screen.getByText(/Create your Voucher/i);
  expect(element).toBeInTheDocument();
});

describe('First Step, Client Search', () => {
  beforeEach(() => {
    render(renderElement, { wrapper: BrowserRouter });
  });

  test('renders the Client Search', () => {
    const element = screen.getByTestId('searchForm');
    expect(element).toBeInTheDocument();
  });

  test('should display error when email is invalid', async () => {
    await act(async () => {
      const emailInput = screen.getByTestId('emailInput');

      fireEvent.input(emailInput, { target: { value: 'notValidEmail' } });
      fireEvent.submit(screen.getByTestId('searchButton'));
    });

    expect(screen.getByText(/Please enter a valid email address/i));
  });

  test('should display required error when email and phone are empty', async () => {
    await act(async () => {
      fireEvent.submit(screen.getByTestId('searchButton'));
    });

    expect(screen.getAllByText(/Phone or email is required/i)).toHaveLength(2);
  });

  test('should display error when clients are empty', async () => {
    server.use(
      rest.get(`${API.URL}${API.BUSINESS_ID}/client`, (req, res, ctx) => {
        return res(
          ctx.json({
            page: {
              size: 0
            }
          })
        );
      })
    );

    await act(async () => {
      const emailInput = screen.getByTestId('emailInput');

      fireEvent.input(emailInput, {
        target: { value: 'nonExistentEmail@mail.com' }
      });
      fireEvent.submit(screen.getByTestId('searchButton'));
    });

    await waitFor(() =>
      screen.getByText(/No clients found for these search criteria/i)
    );

    expect(screen.getByText(/No clients found for these search criteria/i));
  });

  test('should display the client found', async () => {
    await act(async () => {
      const emailInput = screen.getByTestId('emailInput');

      fireEvent.input(emailInput, {
        target: { value: client.email }
      });
      fireEvent.submit(screen.getByTestId('searchButton'));
    });

    await waitFor(() => screen.getByText(client.email));
    expect(screen.getByText(client.email)).toBeInTheDocument();
  });
});

describe('Second Step, Voucher Form', () => {
  beforeEach(async () => {
    render(renderElement, { wrapper: BrowserRouter });

    await act(async () => {
      const emailInput = screen.getByTestId('emailInput');

      fireEvent.input(emailInput, {
        target: { value: client.email }
      });
      fireEvent.submit(screen.getByTestId('searchButton'));
    });

    await waitFor(() => screen.getByText(client.email));

    await act(async () => {
      const card = screen.getByTestId('clientCard');

      fireEvent.click(card);
    });

    await waitFor(() => screen.getByText(client.email));
  });

  test('renders the Voucher Form', () => {
    const element = screen.getByTestId('voucherForm');
    expect(element).toBeInTheDocument();
  });

  test('renders back button', () => {
    expect(screen.getByText(/Back/i)).toBeInTheDocument();
  });

  test('should go back to the first step', async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId('back'));
    });

    await waitFor(() => screen.getByTestId('searchForm'));

    expect(screen.getByTestId('searchForm')).toBeInTheDocument();
  });

  test('should display required error when amount is empty', async () => {
    await act(async () => {
      fireEvent.submit(screen.getByTestId('voucherCreateButton'));
    });

    expect(screen.getByText(/Amount is required/i)).toBeInTheDocument();
  });

  describe('Third Step, Voucher Confirmation', () => {
    beforeEach(async () => {
      await act(async () => {
        const amountInput = screen.getByTestId('amountInput');

        fireEvent.input(amountInput, {
          target: { value: 20 }
        });
        fireEvent.submit(screen.getByTestId('voucherCreateButton'));
      });
    });

    test('renders back button', () => {
      expect(screen.getByText(/Back/i)).toBeInTheDocument();
    });

    test('should go back to the second step', async () => {
      await act(async () => {
        fireEvent.click(screen.getByTestId('back'));
      });

      await waitFor(() => screen.getByTestId('voucherForm'));

      expect(screen.getByTestId('voucherForm')).toBeInTheDocument();
    });

    test('renders voucher success message', () => {
      expect(
        screen.getByText(/Voucher Created Successfully/i)
      ).toBeInTheDocument();
    });

    test('renders voucher serial number', () => {
      expect(screen.getByText(voucher.serialNumber)).toBeInTheDocument();
    });

    test('renders Start Over link', () => {
      expect(screen.getByText(/Start Over/i)).toBeInTheDocument();
    });

    test('should go back to the first step', async () => {
      await act(async () => {
        fireEvent.click(screen.getByTestId('startover'));
      });

      await waitFor(() => screen.getByTestId('searchForm'));

      expect(screen.getByTestId('searchForm')).toBeInTheDocument();
    });
  });
});
