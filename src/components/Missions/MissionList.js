import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { fetchMission, joinMission, leaveMission } from '../../redux/Mission';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {

    }
  }, []);
  return (
    <Container className='container-fluid'>
    <Table className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
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
            id, name, description, reserved,
          }) => (
          <tr className="row-wrap" key={id}>
            <td>
              <h3>{name}</h3>
            </td>
            <td>
              <p>{description}</p>
            </td>
            <td>
              {reserved && (
                <span className="btn" type="button">
                  Active Member
                </span>
              )}
              {!reserved && (
                <span className="btn" type="button">
                  Not a Member
                </span>
              )}
            </td>
            <td>
              {!reserved && (
                <button
                  className="leave-btn"
                  size="sm"
                  variant="outline-danger"
                  type="button"
                  onClick={() => joinMissionHandler(id)}
                >
                  Join Mission
                </button>
              )}
              {reserved && (
                <button
                  className="join-btn"
                  size="sm"
                  variant="outline-secondary"
                  type="button"
                  onClick={() => leaveMissionHandler(id)}
                >
                  Leave Mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  );
};

export default MissionList;
