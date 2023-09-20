import React from 'react';
import SingleVaccination from './SingleVaccination';
import Table from 'react-bootstrap/Table';
import vaccinationStore from '../../stores/vaccinationStore';

const Vaccinations = () => {
  const store = vaccinationStore();

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>MEDICATION</th>
            <th>DATE</th>
            <th>NEXT DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.vaccinations &&
            store.vaccinations.map((item, index) => {
              return (
                <SingleVaccination index={index} item={item} key={item._id} />
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Vaccinations;
