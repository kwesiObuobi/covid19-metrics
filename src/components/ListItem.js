import React from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';

const ListItem = () => (
  <div>
    <div className="arrow-next"><BiRightArrowCircle /></div>
    <div>
      <p className="item-name">Gold Coast Ghana</p>
      <p className="item-num">98765432</p>
      <p className="item-cases">cases</p>
    </div>
  </div>
);

export default ListItem;
