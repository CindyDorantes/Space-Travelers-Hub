import './rockets.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets);
    }
  }, []);

  return (
    <div>
      {rockets.map((rocket) => (
        <div className="rocketDiv" key={rocket.id}>
          <div className="imgRocket"><img src={rocket.images[0]} alt={rocket.name} /></div>
          <div className="descDiv">
            <h2 id={rocket.id}>{rocket.name}</h2>
            <p className="desc">
              {rocket.description}
            </p>
            <button className="reservationBtn  button" type="button">Reservation</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
