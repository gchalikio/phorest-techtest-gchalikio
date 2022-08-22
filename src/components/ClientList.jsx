/**

ClientList component:
Renders a list of client cards or a message if no clients are passed

**/
import PropTypes from 'prop-types';
import ClientCard from 'components/ClientCard';

function handleClientClick(client, setStep, setSelectedClient) {
  setStep(1);
  setSelectedClient(client);
}

function renderClients(clients, setStep, setSelectedClient) {
  return clients.map((client) => {
    return (
      <div
        key={client.clientId}
        className="column is-one-third-desktop is-half-tablet"
        onClick={() => handleClientClick(client, setStep, setSelectedClient)}
      >
        <ClientCard client={client} />
      </div>
    );
  });
}

function ClientList({ clients, setStep, setSelectedClient, searched }) {
  if (!searched) return;

  if (clients.length > 0) {
    return (
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <h3 className="title">Select a Client</h3>
            </div>
          </div>
          <div className="row columns is-multiline is-tablet">
            {renderClients(clients, setStep, setSelectedClient)}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <article className="message is-danger m-6">
        <div className="message-body">
          No clients found for these search criteria
        </div>
      </article>
    );
  }
}

ClientList.propTypes = {
  setStep: PropTypes.func,
  setSelectedClient: PropTypes.func,
  clients: PropTypes.array,
  searched: PropTypes.bool
};

export default ClientList;
