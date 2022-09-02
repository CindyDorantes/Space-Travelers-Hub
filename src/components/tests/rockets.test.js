import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../rockets/rockets';
import store from '../../redux/configureStore';
import rocketReducer, { fetchRockets } from '../../redux/rockets/rockets';

describe('Jest Snapshot testing suite', () => {
  it('matches DOM rockets snapshot', () => {
    const rocketDiv = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      );
    expect(rocketDiv).toMatchSnapshot();
  });

  it('should return an empty state', () => {
    const newState = rocketReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('should return an empty state', () => {
    const initialState = rocketReducer([], {});
    expect(initialState).toEqual([]);
  });

  it('should return content from the rocket API', () => {
    const rocketItems = fetchRockets();
    expect(rocketItems).not.toEqual([]);
  });
});
