/**

Card component:
Displays a card with the client's information

**/
import PropTypes from 'prop-types';
import 'styles/components/ClientCard.css';

function ClientCard({ client }) {
  return (
    <div className="card" data-testid="clientCard">
      <div className="card-content">
        <div className="media">
          <div className="media-content has-text-left">
            <span className="icon-text">
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              <span className="is-size-4">{`${client.firstName} ${client.lastName}`}</span>
            </span>
          </div>
        </div>

        <div className="content">
          <ul className="has-text-left">
            <li className="is-size-7">
              <strong>Email: </strong>
              {client.email}
            </li>
            <li className="is-size-7">
              <strong>Mobile: </strong>
              {client.mobile}
            </li>
          </ul>
          {client.notes && (
            <blockquote className="is-size-7">Notes: {client.notes}</blockquote>
          )}
        </div>
      </div>
    </div>
  );
}

ClientCard.propTypes = {
  client: PropTypes.object
};

export default ClientCard;
