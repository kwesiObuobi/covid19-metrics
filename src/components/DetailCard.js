import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { showBackButton } from '../app/features/continent/continentSlice';

const DetailCard = () => {
  const dispatch = useDispatch();
  const { first, second } = useParams();

  useEffect(() => {
    dispatch(showBackButton());
    console.log(first, second);
  });

  return (
    <div>
      <Navbar />
      Detail card is here
    </div>
  );
};

export default DetailCard;
