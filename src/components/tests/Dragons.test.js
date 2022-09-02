import { render } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Dragons from '../Dragons';

describe('Dragons component', () => {
  test('Renders Dragons component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Dragons />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});