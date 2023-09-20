import React from 'react';
import SingleQuarantine from './SingleQuarantine';
import Table from 'react-bootstrap/Table';
import quarantineStore from '../../stores/quarantineStore';

const Quarantines = () => {
  const store = quarantineStore();

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>CONDITION</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>OUTCOME</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.quarantines &&
            store.quarantines.map((item, index) => {
              return (
                <SingleQuarantine index={index} item={item} key={item._id} />
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Quarantines;
