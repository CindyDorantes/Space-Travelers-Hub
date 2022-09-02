import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import renderer  from 'react-test-renderer';
import MyProfile from '../My-Profile';


describe('to test the rockets elements', () => {
    it('matches DOM rockets snapshot', () => {
      const tree  = renderer.create(
          <Provider store={store}>
            <MyProfile />
          </Provider>,
      );
        expect(tree).toMatchSnapshot();
    });
})