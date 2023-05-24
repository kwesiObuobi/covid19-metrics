import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeView from '../components/HomeView';
import store from '../app/store';

test('renders list view correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <HomeView />
      </Router>
    </Provider>,
  );
  const headingElement = screen.queryByText(/metrics/i);
  expect(headingElement).toBeInTheDocument();
});
