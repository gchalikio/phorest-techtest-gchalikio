/**

Voucher page:
This page is main container for the voucher creation.
- Initializes and passes down the state.
- Acts as a router for the voucher step pages
- Renders the main header
- Renders a back button on top of the steps
- It contains the logic for validating params and fetching, dedublicating clients

(Yes it could be thinner having logic extracted)

**/
import { getClients } from 'api/client';
import { dedublicateClients } from 'lib/helpers';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ClientSearch from './ClientSearch';
import Confirmation from './Confirmation';
import VoucherForm from './VoucherForm';

function renderVoucherHeader() {
  return (
    <div className="content is-large p-4 has-background-info">
      <h1 className="has-text-primary-light">Create your Voucher</h1>
      <p className="has-text-primary-light">
        Search for a client by their email address or phone number and once
        found create a voucher for them
      </p>
    </div>
  );
}

function renderBackButton(step, setStep) {
  return (
    step !== 0 && (
      <div
        data-testid="back"
        className="field has-addons"
        onClick={() => setStep(step - 1)}
      >
        <p className="control">
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-arrow-left"></i>
            </span>
            <span>Back</span>
          </button>
        </p>
      </div>
    )
  );
}

function validateParams(params, setError) {
  // If neither field is filled, it doens't make the call
  // If ommitted, the first page of the clients will be fetched
  if (!params.phone && !params.email) {
    setError('phone', {
      type: 'custom',
      message: 'Phone or email is required'
    });
    setError('email', {
      type: 'custom',
      message: 'Phone or email is required'
    });

    return false;
  }

  return true;
}

function Voucher() {
  // Defines which step to render
  const [step, setStep] = useState(0);
  // Is used in order not to render the No Clients Found message on the start
  const [searched, setSearched] = useState(false);
  // Is used for rendering the loading state of the buttons
  const [loading, setLoading] = useState(false);
  // Keeps track of the selected client
  const [selectedClient, setSelectedClient] = useState();
  // Keeps the clients array
  const [clients, setClients] = useState([]);
  // Keeps the voucher returned after the creation
  const [voucher, setVoucher] = useState([]);

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm();

  const onSubmit = (params) => {
    if (!validateParams(params, setError)) return;

    setLoading(true);
    const queryParams = {};

    // Add the field value in params if not empty
    for (const [key, value] of Object.entries(params)) {
      if (value) queryParams[key] = value;
    }

    getClients(queryParams)
      .then(({ data }) => {
        // Simple check to see if we have ane clients fetched
        if (data?.page?.size) {
          setClients(dedublicateClients(data._embedded.clients));
        } else setClients([]);
      })
      .catch(() => {
        alert('Something went wrong. Please try again!');
      })
      .finally(() => {
        if (!searched) setSearched(true);
        setLoading(false);
      });
  };

  const submit = handleSubmit(onSubmit);

  return (
    <div>
      {renderVoucherHeader()}
      <div className="content is-large p-4">
        {renderBackButton(step, setStep)}

        {step === 0 && (
          <ClientSearch
            setStep={setStep}
            setSelectedClient={setSelectedClient}
            clients={clients}
            setClients={setClients}
            register={register}
            errors={errors}
            handleSubmit={submit}
            loading={loading}
            searched={searched}
          />
        )}
        {step === 1 && (
          <VoucherForm
            client={selectedClient}
            setVoucher={setVoucher}
            setStep={setStep}
          />
        )}
        {step === 2 && (
          <Confirmation
            client={selectedClient}
            voucher={voucher}
            setStep={setStep}
          />
        )}
      </div>
    </div>
  );
}

export default Voucher;
