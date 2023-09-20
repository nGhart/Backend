import React from 'react';
import SingleMed from './SingleMed';
import Table from 'react-bootstrap/Table';
import medStore from '../../stores/medStore';

const Meds = () => {
  const store = medStore();

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>BATCH NO</th>
            <th>SUPPLIER</th>
            <th>EXPIRY DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.meds &&
            store.meds.map((item, index) => {
              return <SingleMed index={index} item={item} key={item._id} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Meds;
