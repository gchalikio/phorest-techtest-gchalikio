/**

The main App component

**/
import 'bulma/css/bulma.min.css';
import Application from './Application';

function App() {
  return (
    <div className="App has-text-centered" data-testid="app">
      <Application />
    </div>
  );
}

export default App;
