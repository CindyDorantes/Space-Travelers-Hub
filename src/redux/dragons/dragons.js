const GET_DRAGONS = 'get_dragons';
const url = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS: {
      return action.payload;
    }
    default:
      return state;
  }
};

const dragonsArray = (data) => {
  const dragonsData = [];
  data.map((dragons) => (
    dragonsData.push(
      {
        id: dragons.id,
        name: dragons.name,
        type: dragons.type,
        flickr_images: dragons.flickr_images[0],
      },
    )
  ));
  return dragonsData;
};

const getDragons = () => (dispatch) => fetch(url)
  .then(async (response) => {
    const dragonsData = await response.json();
    return dragonsData;
  })
  .then((dragonsData) => {
    dispatch({ type: GET_DRAGONS, payload: dragonsArray(dragonsData) });
  });

export { getDragons };
export default dragonReducer;
