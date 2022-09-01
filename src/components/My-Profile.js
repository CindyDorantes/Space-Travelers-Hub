import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const MyProfile = () => {
  const dragons = useSelector((state) => state.dragons);
  const dragonsReserved = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <div>
      <div>
        <h2>My Dragons</h2>
        <table>
          {dragonsReserved.map((dragon) => (
            <tr key={dragon.id}>
              <td>{dragon.name}</td>
            </tr>
          ))}
        </table>
      </div>
      this is my profile
    </div>
  );
};

export default MyProfile;
