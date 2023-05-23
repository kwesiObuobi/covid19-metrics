import React, { useEffect, useState } from 'react';
// import { BiRightArrowCircle } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveStat, fetchContinents } from '../app/features/continent/continentSlice';
import '../styles/listview.css';
import ListItem from './ListItem';

const ListView = () => {
  const [statsBy, setStatsBy] = useState('continents');
  const {
    loading, error, data, countries, continents,
  } = useSelector((store) => store.continent);
  const dispatch = useDispatch();
  const styledData = [];

  let j = 0;
  data.forEach((item) => {
    let obj = {
      cases: item.cases,
      deep: !!(j === 1 || j === 2),
    };
    if (countries) {
      obj = { ...obj, country: item.country };
    }
    if (continents) {
      obj = { ...obj, continent: item.continent };
    }
    styledData.push(obj);
    j += 1;
    if (j === 4) {
      j = 0;
    }
  });

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
        <h3 className="stats-by-h3">stats by:</h3>
        <select
          name="stats-by"
          id="stats-by"
          className="stats-select"
          value={statsBy}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          <option className="option">continents</option>
          <option className="option">countries</option>
        </select>
      </div>

      <ul className="list-items">
        {countries && styledData.map((item) => (
          <ListItem key={item.country} item={item} />
        ))}
      </ul>

      <ul className="list-items">
        {continents && styledData.map((item) => (
          <ListItem key={item.continent} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ListView;
