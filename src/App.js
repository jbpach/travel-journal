import './App.css';
import { Locations } from './data/Locations';
import NavBar from './components/NavBar';
import Card from './components/Card';

function App() {
  const LocationCards = Locations.map((location) => {
    return (
      <Card key={location.id} item={location} />
    )
  })

  return (
    <div>
      <NavBar />
      <section className='app--section'>
        {LocationCards} 
      </section>
      
    </div>
  );
}

export default App;
