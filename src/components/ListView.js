import React, { useEffect, useState } from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveStat, fetchContinents } from '../app/features/continent/continentSlice';
import '../styles/listview.css';

const ListView = () => {
  const [statsBy, setStatsBy] = useState('continents');
  const {
    loading, error, data, countries, continents,
  } = useSelector((store) => store.continent);
  const dispatch = useDispatch();
  // let i = 0;

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
        <li className="list-item">
          <div className="arrow-next"><BiRightArrowCircle /></div>
          <div>
            <p className="item-name">Gold Coast Ghana</p>
            <p className="item-num">98765432</p>
            <p className="item-cases">cases</p>
          </div>
        </li>
        <li className="list-item">
          <div className="arrow-next"><BiRightArrowCircle /></div>
          <div>
            <p className="item-name">Gold Coast Ghana</p>
            <p className="item-num">98765432</p>
            <p className="item-cases">cases</p>
          </div>
        </li>
        <li className="list-item">
          <div className="arrow-next"><BiRightArrowCircle /></div>
          <div>
            <p className="item-name">Gold Coast Ghana</p>
            <p className="item-num">98765432</p>
            <p className="item-cases">cases</p>
          </div>
        </li>
        <li className="list-item">
          <div className="arrow-next"><BiRightArrowCircle /></div>
          <div>
            <p className="item-name">Gold Coast Ghana</p>
            <p className="item-num">98765432</p>
            <p className="item-cases">cases</p>
          </div>
        </li>
      </ul>

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
