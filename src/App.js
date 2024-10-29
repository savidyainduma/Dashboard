import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
