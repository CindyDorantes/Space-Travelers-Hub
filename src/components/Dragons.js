import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DragonItem from './DragonItem';
import { getDragons } from '../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);
  console.log(dragons);

  useEffect(() => {
    if (!dragons.length) {
      dispatch(getDragons());
    }
  }, []);

  // const state = [
  //   {
  //     id: 'dragon1',
  //     name: 'Dragon 1',
  //     type: 'capsule',
  //     flickr_images: 'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
  //   },
  //   {
  //     id: 'dragon2',
  //     name: 'Dragon 2',
  //     type: 'capsule',
  //     flickr_images: 'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg',
  //   },
  // ];

  return (
    <div className="dragonContainer">
      {dragons.map((dragon) => (
        <DragonItem dragon={dragon} key={dragon.id} />
      ))}
    </div>
  );
};

export default Dragons;
