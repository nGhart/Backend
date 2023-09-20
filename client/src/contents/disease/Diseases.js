import React from 'react';
import SingleDisease from './SingleDisease';
import Table from 'react-bootstrap/Table';
import diseaseStore from '../../stores/diseaseStore';

const Diseases = () => {
  const store = diseaseStore();

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>ANIMAL</th>
            <th>CONDITION</th>
            <th>MANAGEMENT</th>
            <th>DURATION</th>
            <th>OUTCOME</th>
            <th>DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.diseases &&
            store.diseases.map((item, index) => {
              return <SingleDisease index={index} item={item} key={item._id} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Diseases;
