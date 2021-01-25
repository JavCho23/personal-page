import logo from '../assets/svg/logo.svg';
import '../assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The init of my personal page
        </p>
        <a
          className="App-link"
          href="https://github.com/JavCho23/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @javcho23
        </a>
      </header>
    </div>
  );
}

export default App;
