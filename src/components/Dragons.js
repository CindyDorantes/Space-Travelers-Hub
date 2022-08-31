import { React } from 'react';
import DragonItem from './DragonItem';

const Dragons = () => {
  const state = [
    {
      id: 'dragon1',
      name: 'Dragon 1',
      type: 'capsule',
      flickr_images: 'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
    },
    {
      id: 'dragon2',
      name: 'Dragon 2',
      type: 'capsule',
      flickr_images: 'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg',
    },
  ];

  return (
    <div className="dragonContainer">
      {state.map((dragon) => (
        <DragonItem dragon={dragon} key={dragon.id} />
      ))}
    </div>
  );
};

export default Dragons;
