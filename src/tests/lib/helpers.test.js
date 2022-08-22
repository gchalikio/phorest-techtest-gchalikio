import { dedublicateClients } from 'lib/helpers';
import { client, clients } from 'tests/fixtures';

const dublicatedClients = [client, client];

describe('dedublicateClients', () => {
  test('with unique clients', () => {
    expect(dedublicateClients(clients)).toEqual(
      expect.arrayContaining(clients)
    );
  });

  test('with dublicatedClients clients', () => {
    expect(dedublicateClients(dublicatedClients)).toEqual(
      expect.arrayContaining([client])
    );
  });
});
