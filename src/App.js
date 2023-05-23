import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContinents } from './app/features/continent/continentSlice';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';

function App() {
  const { loading, error, continents } = useSelector((store) => store.continent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContinents());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading page!</p>;
  }

  return (
    <div className="App">
      <Navbar />
      <HomeView />
      <h1>Welcome to app</h1>
      {continents.map((item) => (
        <div key={item.continent}>
          {item.continent}
        </div>
      ))}
    </div>
  );
}

export default App;
