/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/DragonItem.module.css';

const DragonItem = (props) => {
  const { dragon } = props;

  return (
    <div className={styles.dragonItem}>
      <div className="dragonImg">
        <img src={dragon.flickr_images} alt="capsule dragon1" className={styles.imgFlickr} />
      </div>
      <div className={styles.dragonInfo}>
        <h2>{dragon.name}</h2>
        <p className={styles.dragonType}>
          Type:
          {dragon.type}
        </p>
        <button type="button" className={styles.reserveBtn}>Reserve Dragon</button>
      </div>
    </div>
  );
};

DragonItem.propTypes = { dragon: PropTypes.object.isRequired };

export default DragonItem;
