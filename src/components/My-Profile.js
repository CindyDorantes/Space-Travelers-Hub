import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const reserveRocket = rockets.filter((rocket) => rocket.reserved);
  
  return (
    <div className="rocketDiv">
      <h1>Rockets</h1>
      <div>
        {reserveRocket.length ? (
          <div>
            {reserveRocket.map((rocket) => (
              <h2 className="rocketDesc" key={rocket.id}>
                {rocket.name}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MyProfile;
