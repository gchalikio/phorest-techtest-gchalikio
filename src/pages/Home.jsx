/**

Home page:
Just a welcome page to get the user started

**/
import { Link } from 'react-router-dom';
import 'styles/pages/Home.css';

function Home() {
  return (
    <div>
      <section className="hero is-success is-fullheight-with-navbar with-background">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="overlay">
              <p className="title">Phorest Vouchers</p>
              <p className="subtitle">Build your own application</p>
              <Link to="voucher">
                <button className="button is-link">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
