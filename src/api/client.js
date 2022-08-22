/**

API Requests regarding the Client Model

**/
import API from 'config/api';
import AxiosClient from 'lib/AxiosClient';

// Fetch List of clients
//
//
// (param) Object { email:, phone: }
//
// Returns a Promise
async function getClients(params) {
  return AxiosClient(`${API.BUSINESS_ID}/client`, { params });
}

export { getClients };
