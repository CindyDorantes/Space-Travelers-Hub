// to add action types
const FETCH_ROCKETS = 'FETCH_ROCKETS';

// to add action creators
const fetchRocket = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

// To fetch information
const fetchRockets = async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  dispatch(fetchRocket(rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    images: rocket.flickr_images,
  }))));
};

// to initialize state
const initialState = [];

// to add reducers
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export { fetchRockets };
export default rocketReducer;
