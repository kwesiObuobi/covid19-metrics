import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveStat, fetchContinents } from '../app/features/continent/continentSlice';

const ListView = () => {
  const [statsBy, setStatsBy] = useState('continents');
  const {
    loading, error, data, countries, continents,
  } = useSelector((store) => store.continent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContinents(statsBy));
  }, [dispatch, statsBy]);

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>error loading page</p>;
  }

  const handleChange = (value) => {
    setStatsBy(value);
    dispatch(setActiveStat());
    dispatch(fetchContinents(value));
  };

  return (
    <div className="listview-container">
      <div className="stats-by">
        <h3>stats by:</h3>
        <select
          name="stats-by"
          id="stats-by"
          value={statsBy}
          onChange={(e) => {
            // e.preventDefault();
            handleChange(e.target.value);
          }}
        >
          <option>continents</option>
          <option>countries</option>
        </select>
      </div>
      {countries && data.map((item) => (
        <div key={item.country}>
          {item.country}
        </div>
      ))}
      {continents && data.map((item) => (
        <div key={item.continent}>
          {item.continent}
        </div>
      ))}
    </div>
  );
};

export default ListView;
