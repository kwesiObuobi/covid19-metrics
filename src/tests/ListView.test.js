import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ListView from '../components/ListView';
import store from '../app/store';

test('renders list view correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <ListView />
      </Router>
    </Provider>,
  );
  const headingElement = screen.queryByText(/stats/i);
  expect(headingElement).toBeInTheDocument();
});
