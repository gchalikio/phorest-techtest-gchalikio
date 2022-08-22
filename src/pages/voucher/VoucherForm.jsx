/**

Voucher/VoucherForm page:
This page is the second step in the voucher creation.
It contains the form that creates the voucher.

**/
import { postVoucher } from 'api/voucher';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ClientCard from 'components/ClientCard';

function VoucherForm({ client, setStep, setVoucher }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmit = (params) => {
    setLoading(true);
    postVoucher(client.clientId, params)
      .then(({ data }) => {
        setVoucher(data);
        setStep(2);
      })
      .catch((error) => {
        alert('Something went wrong. Please try again!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h3 className="title">Voucher</h3>
      <div className="columns is-mobile">
        <div className="column is-half-desktop is-offset-one-quarter-desktop">
          <ClientCard client={client} />
          <form data-testid="voucherForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  data-testid="amountInput"
                  placeholder="11085034143845"
                  type="number"
                  {...register('amount', {
                    required: { value: true, message: 'Amount is required' }
                  })}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-money-bill"></i>
                </span>
              </p>
              {errors.amount && (
                <p className="is-size-7 has-text-danger">
                  {errors.amount.message}
                </p>
              )}
            </div>

            <div className="field">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      data-testid="voucherCreateButton"
                      className={`button is-primary ${loading && 'is-loading'}`}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

VoucherForm.propTypes = {
  client: PropTypes.object,
  setStep: PropTypes.func,
  setVoucher: PropTypes.func
};

export default VoucherForm;
