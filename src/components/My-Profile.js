import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const reserveRocket = rockets.filter((rocket) => rocket.reserved);
  const dragons = useSelector((state) => state.dragons);
  const dragonsReserved = dragons.filter((dragon) => dragon.reserved === true);
  const missionProfile = useSelector((state) => [
    {
      MissionTitle: 'My Mission',
      data: state.missions.filter((mission) => mission.reserved),
    },
  ]);

  return (
    <div className="myprofileContainer">
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
      <div className="dragonDiv">
        <h2>My Dragons</h2>
        <table>
          {dragonsReserved.map((dragon) => (
            <tr key={dragon.id}>
              <td>{dragon.name}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="missionsDiv">
        {missionProfile.map(({ MissionTitle, data, id }) => (
          <div key={id}>
            <h4 key={id}>{MissionTitle}</h4>
            <div className="content">
              {
                    !data.length
                      ? <p>No Missions</p>
                      : data.map((item) => <p key={item.id}>{item.name}</p>)
                  }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
