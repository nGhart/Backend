import React from 'react';
import SingleMating from './SingleMating';
import Table from 'react-bootstrap/Table';
import matingStore from '../../stores/matingStore';

const Matings = () => {
  const store = matingStore();

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>DOE</th>
            <th>BUCK</th>
            <th>FIRST SERVICING</th>
            <th>LAST SERVICING</th>
            <th>ESTIMATED NESTING DATE</th>
            <th>NESTING DATE</th>
            <th>KINDLING DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.matings &&
            store.matings.map((item, index) => {
              return <SingleMating index={index} item={item} key={item._id} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Matings;
