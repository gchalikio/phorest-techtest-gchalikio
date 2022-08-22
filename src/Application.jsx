/**

Application:
Component that wraps the applications and usually
contains initialization code or calls to the API

**/
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import ApplicationRouter from './ApplicationRouter';

function Application() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main" data-testid="application">
        <ApplicationRouter />
      </div>
    </BrowserRouter>
  );
}

export default Application;
