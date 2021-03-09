import { useEffect } from "react"
import Page from './components/Page/Page'
import './App.css';
import { apiService } from './services/giffy'
import logo from './assets/image.png'

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Page/>
    </div>
  );
}

export default App;
