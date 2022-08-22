const client = {
  clientId: 'iWR5lbYIRX-trpKYwXoBww',
  firstName: 'John',
  lastName: 'Doe',
  mobile: '11085034143845',
  email: '0.111085034143845@example.com'
};

const client2 = {
  clientId: '3c0EW7MKeuVFDs8zrGEcsw',
  version: 155,
  firstName: '100-testaa',
  lastName: 'demouk-test',
  mobile: '353888888881235',
  landLine: '',
  email: '100@uk.con'
};

const clients = [client, client2];

const voucher = {
  voucherId: '0kzrsN7cK4Eviv79Ho6SQw',
  serialNumber: '14492',
  issueDate: '2022-08-19T10:17:06.000Z',
  expiryDate: '2022-10-19T10:17:06.000Z',
  clientId: 'WwEaIb0m4bhJphVtm2VgIw',
  creatingBranchId: 'SE-J0emUgQnya14mOGdQSw',
  originalBalance: 122,
  remainingBalance: 122.0,
  createdAt: '2022-08-19T19:37:06.000Z',
  updatedAt: '2022-08-19T19:37:06.000Z'
};

function mock() {
  return true;
}

export { client, client2, clients, voucher, mock };
