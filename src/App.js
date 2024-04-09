import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ListComponent from './components/ListComponent';
import ScheduleDonationsComponent from './components/ScheduleDonations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ListComponent />
      <ScheduleDonationsComponent />
    </div>
  );
}

export default App;
