/**

API Requests regarding the Voucher Model

**/
import API from 'config/api';
import AxiosClient from 'lib/AxiosClient';
import moment from 'moment';

// Creates and returns Voucher for a given business.
//
//
// (param) Number clientId
// (param) Object { amount: }
//
// Returns a Promise
async function postVoucher(clientId, params) {
  const body = {
    clientId: clientId,
    creatingBranchId: API.BRANCH_ID,
    originalBalance: params.amount,
    issueDate: moment(),
    expiryDate: moment().add(2, 'months')
  };

  return AxiosClient.post(`${API.BUSINESS_ID}/voucher`, body);
}

export { postVoucher };
