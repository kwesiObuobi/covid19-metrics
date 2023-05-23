import React from 'react';
import PropTypes from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListItem = ({ item }) => {
  const { countries, continents } = useSelector((store) => store.continent);

  return (
    <li key={item.country} className={item.deep === true ? 'list-item deep' : 'list-item'}>
      <Link to={countries
        ? `countries/${item.country}`
        : `continents/${item.continent}`}
      >
        <div className="arrow-next"><BiRightArrowCircle /></div>
        <div>
          {countries === true && <p className="item-name">{item.country}</p>}
          {continents === true && <p className="item-name">{item.continent}</p>}
          <p className="item-num">{item.cases}</p>
          <p className="item-cases">cases</p>
        </div>
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ListItem;
