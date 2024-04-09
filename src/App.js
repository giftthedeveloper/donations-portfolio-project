import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ListComponent from './components/ListComponent';
import ScheduleDonationsComponent from './components/ScheduleDonations';
import TrackDonations from './components/TrackDonations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ListComponent />
      <ScheduleDonationsComponent />
      <TrackDonations />
    </div>
  );
}

export default App;
