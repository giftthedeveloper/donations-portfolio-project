import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ListComponent from './components/ListComponent';
import ScheduleDonationsComponent from './components/ScheduleDonations';
import TrackDonations from './components/TrackDonations';
import DonateAnonymously from './components/DonateAnonymously';
import Blog from './components/BlogSection';
import HelpSection from './components/HelpSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ListComponent />
      <ScheduleDonationsComponent />
      <TrackDonations />
      <DonateAnonymously />
      <Blog />
      <HelpSection />
    </div>
  );
}

export default App;
