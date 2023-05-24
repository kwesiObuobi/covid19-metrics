import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { getSingleItem, showBackButton } from '../app/features/continent/continentSlice';
import '../styles/detailcard.css';

const DetailCard = () => {
  const dispatch = useDispatch();
  const { first, second } = useParams();
  const { singleData } = useSelector((store) => store.continent);

  useEffect(() => {
    dispatch(showBackButton());
    dispatch(getSingleItem({ first, second }));
  }, [dispatch, first, second]);

  return (
    <div className="detail-card">
      <Navbar />
      <div className="item-brand-box">
        <p className="item-brand-name">{second}</p>
      </div>
      <ul className="item-details">
        <li className="item-detail">
          <p className="detail-title">Cases</p>
          <p className="detail-value">{singleData.cases}</p>
        </li>
        <li className="item-detail">
          <p className="detail-title">Recovered</p>
          <p className="detail-value">{singleData.recovered}</p>
        </li>
        <li className="item-detail">
          <p className="detail-title">Deaths</p>
          <p className="detail-value">{singleData.deaths}</p>
        </li>
        <li className="item-detail">
          <p className="detail-title">Population</p>
          <p className="detail-value">{singleData.population}</p>
        </li>
        <li className="item-detail">
          <p className="detail-title">Critical</p>
          <p className="detail-value">{singleData.critical}</p>
        </li>
        <li className="item-detail">
          <p className="detail-title">Tests</p>
          <p className="detail-value">{singleData.tests}</p>
        </li>
      </ul>
    </div>
  );
};

export default DetailCard;
