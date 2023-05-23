import React from 'react';
import PropTypes from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';

const ListItem = ({ item }) => (
  <li key={item.country} className={item.deep === true ? 'list-item deep' : 'list-item'}>
    <div className="arrow-next"><BiRightArrowCircle /></div>
    <div>
      {item.country && <p className="item-name">{item.country}</p>}
      {item.continent && <p className="item-name">{item.continent}</p>}
      <p className="item-num">{item.cases}</p>
      <p className="item-cases">cases</p>
    </div>
  </li>
);

ListItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ListItem;
