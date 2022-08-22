/**

Voucher/ClientSearch page:
This page is the first step in the voucher creation.
It contains the form that searches for clients
and renders the client list.

**/
import PropTypes from 'prop-types';
import ClientList from 'components/ClientList';

function ClientSearch({
  clients,
  setStep,
  setSelectedClient,
  register,
  errors,
  handleSubmit,
  loading,
  searched
}) {
  return (
    <div>
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="title">Search for a Client</h3>

            <form data-testid="searchForm" onSubmit={handleSubmit}>
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input
                    data-testid="phoneInput"
                    className="input"
                    placeholder="11085034143845"
                    type="number"
                    {...register('phone')}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-phone"></i>
                  </span>
                </p>
                {errors.phone && (
                  <p className="is-size-7 has-text-danger">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input
                    data-testid="emailInput"
                    className="input"
                    type="text"
                    placeholder="0.111085034143845@example.com"
                    {...register('email', {
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
                {errors.email && (
                  <p className="is-size-7 has-text-danger">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    data-testid="searchButton"
                    className={`button is-primary ${loading && 'is-loading'}`}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ClientList
        clients={clients}
        setStep={setStep}
        setSelectedClient={setSelectedClient}
        searched={searched}
      />
    </div>
  );
}

ClientSearch.propTypes = {
  setStep: PropTypes.func,
  setSelectedClient: PropTypes.func,
  clients: PropTypes.array,
  setClients: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
  searched: PropTypes.bool
};

export default ClientSearch;
