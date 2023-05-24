import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../app/store';

test('renders navbar links correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  );
  const headingElement = screen.getByText(/covid stats/i);
  expect(headingElement).toBeInTheDocument();
});
