import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../../redux/Mission';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMission);
    }
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {missions.map(({
          id, name, description,

        }) => (
          <tr className="row-wrap" key={id}>
            <td>
              <h3>{name}</h3>
            </td>
            <td>
              <p>{description}</p>
            </td>
            <td>
              <button className="btn" type="button">Active Member</button>
              <button className="btn" type="button">Not a Member</button>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default MissionList;
