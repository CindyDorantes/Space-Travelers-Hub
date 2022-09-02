import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
    const missionProfile = useSelector((state) => [
      {
        MissionTitle: 'My Mission',
        data: state.missions.filter((mission) => mission.reserved),
      },
      ]);

      return (
      <div>
          <div>
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
      )
  };

export default MyProfile;
