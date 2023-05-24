import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ListItem from '../components/ListItem';

jest.mock('react-redux');

describe('ListItem', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ countries: true, continents: false });
  });

  test('renders the item with continent name', () => {
    const item = { continent: 'Europe', cases: 500, deep: false };
    render(
      <BrowserRouter>
        <ListItem item={item} />
      </BrowserRouter>,
    );

    const itemName = screen.getByText(/cases/);

    expect(itemName).toBeInTheDocument();
  });
});
