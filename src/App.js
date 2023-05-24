import HomeView from './components/HomeView';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="new">
        <Navbar />
        <HomeView />
      </div>
    </div>
  );
}

export default App;
