import React from 'react';
import { useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { HiMicrophone } from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';
import '../styles/navbar.css';

const Navbar = () => {
  const { inDetail } = useSelector((store) => store.continent);

  if (inDetail) {
    console.log('hi');
  }

  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <li className="nav-li"><IoIosArrowBack /></li>
        <li className="nav-li">covid stats</li>
        <li className="nav-li mic-and-setting">
          <div className="mic"><HiMicrophone /></div>
          <div className="settings"><AiOutlineSetting /></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
