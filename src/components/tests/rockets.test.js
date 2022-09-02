import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../rockets/rockets';
import store from '../../redux/configureStore';
import rocketReducer, { fetchRockets } from '../../redux/rockets/rockets';

<<<<<<< HEAD
describe('Jest Snapshot testing suite', () => {
=======
describe('to test the rockets elements', () => {
>>>>>>> b64589cdfc2710d1340400b4f4e70be1750c8598
  it('matches DOM rockets snapshot', () => {
    const rocketDiv = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      );
    expect(rocketDiv).toMatchSnapshot();
  });

<<<<<<< HEAD
  it('should return an empty state', () => {
    const newState = rocketReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('should return an empty state', () => {
=======
  it('testing for the newState to return empty array', () => {
    const newState = rocketReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('the initialState should return empty array', () => {
>>>>>>> b64589cdfc2710d1340400b4f4e70be1750c8598
    const initialState = rocketReducer([], {});
    expect(initialState).toEqual([]);
  });

<<<<<<< HEAD
  it('should return content from the rocket API', () => {
=======
  it('the rocketItem should equal values', () => {
>>>>>>> b64589cdfc2710d1340400b4f4e70be1750c8598
    const rocketItems = fetchRockets();
    expect(rocketItems).not.toEqual([]);
  });
});
