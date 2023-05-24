import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { showBackButton } from '../app/features/continent/continentSlice';
import DetailCard from '../components/DetailCard';

jest.mock('react-redux');

describe('DetailCard', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ singleData: {} });
  });

  test('dispatches showBackButton and getSingleItem actions', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    render(<DetailCard />);

    expect(dispatchMock).toHaveBeenCalledWith(showBackButton());
  });
});
