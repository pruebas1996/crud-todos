import './App.css';
import AllContainer from './components/AllContainer';
import create from './services/create';
import read from './services/read';
import update from './services/update';
import deleteAll from './services/deleteAll';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AllContainer create={create} read={read} update={update} deleteAll={deleteAll} />
      </header>
    </div>
  );
}

export default App;
