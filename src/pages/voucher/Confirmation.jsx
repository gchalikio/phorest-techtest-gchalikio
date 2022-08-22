/**

Voucher/Confirmation page:
This page is the last step in the voucher creation.
It contains the confirmation, the voucher details and a button to start over.

**/
import moment from 'moment';
import PropTypes from 'prop-types';

function Confirmation({ voucher, client, setStep }) {
  return (
    <div>
      <article className="message is-success">
        <div className="message-body">
          <h3 className="title">Voucher Created Successfully</h3>

          <ul className="has-text-left">
            <li className="is-size-7">
              <strong>Client: </strong>
              {client.email}
            </li>
            <li className="is-size-7">
              <strong>Serial Number: </strong>
              {voucher.serialNumber}
            </li>
            <li className="is-size-7">
              <strong>Issue Date: </strong>
              {moment(voucher.issueDate).format('DD-MMM-YYYY')}
            </li>
            <li className="is-size-7">
              <strong>Expiry Date: </strong>
              {moment(voucher.expiryDate).format('DD-MMM-YYYY')}
            </li>
            <li className="is-size-7">
              <strong>Original Balance: </strong>
              {voucher.originalBalance}
            </li>
            <li className="is-size-7">
              <strong>Remaining Balance: </strong>
              {voucher.remainingBalance}
            </li>
          </ul>
        </div>
      </article>

      <button
        data-testid="startover"
        className="button is-primary"
        onClick={() => setStep(0)}
      >
        Start Over
      </button>
    </div>
  );
}

Confirmation.propTypes = {
  voucher: PropTypes.object,
  client: PropTypes.object,
  setStep: PropTypes.func
};

export default Confirmation;
