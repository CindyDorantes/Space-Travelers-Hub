/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const DragonItem = (props) => {
  const { dragon } = props;

  return (
    <div className="dragonItem">
      <div className="dragonImg">
        <img src={dragon.flickr_images} alt="capsule dragon1" />
      </div>
      <div className="dragonInfo">
        <h2>{dragon.name}</h2>
        <p>{dragon.type}</p>
        <button type="button">Reserve Dragon</button>
      </div>
    </div>
  );
};

DragonItem.propTypes = { dragon: PropTypes.object.isRequired };

export default DragonItem;
