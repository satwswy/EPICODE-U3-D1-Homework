import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ButtonComponent label="Hello i am a button"/>
      <ImageComponent source="https://media.istockphoto.com/photos/green-lawn-at-hill-at-sunrise-picture-id1294990080?b=1&k=20&m=1294990080&s=170667a&w=0&h=-VYbhmVtOU1u6wx03JJwhiQjTc3N4IhddyvQliHs5sM=" alt="image"/>
    </div>
  );
}

export default App;
