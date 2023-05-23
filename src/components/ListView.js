import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveStat, fetchContinents } from '../app/features/continent/continentSlice';
import '../styles/listview.css';
import ListItem from './ListItem';

const ListView = () => {
  const {
    loading, error, data, countries, continents,
  } = useSelector((store) => store.continent);
  const dispatch = useDispatch();
  let content;
  let value;
  if (continents === true) {
    value = 'continents';
  } else {
    value = 'countries';
  }

  useEffect(() => {
    dispatch(fetchContinents(value));
  }, [value, dispatch]);

  if (loading) {
    content = <p>loading</p>;
  }

  if (error) {
    content = <p>error loading page</p>;
  }

  const renderedData = (
    <>
      <ul className="list-items">
        {countries && data.map((item) => (
          <ListItem key={item.country} item={item} />
        ))}
      </ul>
      <ul className="list-items">
        {continents && data.map((item) => (
          <ListItem key={item.continent} item={item} />
        ))}
      </ul>
    </>
  );

  if (!loading) {
    content = renderedData;
  }

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setActiveStat());
    dispatch(fetchContinents(e.target.value));
  };

  return (
    <div className="listview-container">
      <div className="stats-by">
        <h3 className="stats-by-h3">stats by:</h3>
        <select
          name="stats-by"
          id="stats-by"
          className="stats-select"
          value={value}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="continents" className="option">continents</option>
          <option value="countries" className="option">countries</option>
        </select>
      </div>

      {content}
    </div>
  );
};

export default ListView;
