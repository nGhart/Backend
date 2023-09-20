import React, { useState } from 'react';
import animalStore from '../../stores/store';
import Table from 'react-bootstrap/Table';
import SingleAnimal from './SingleAnimal';

const Animals = () => {
  const store = animalStore();
  // const [currentPage, setCurrentPage] = useState();
  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>BREED</th>
            <th>SEX</th>
            <th>SOURCE</th>
            <th>DOB</th>
            <th>AGE (wks)</th>
            <th>WEANED (wks)</th>
            <th>WEIGHT (kg)</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.animals &&
            store.animals.map((item, index) => {
              return <SingleAnimal item={item} index={index} key={item._id} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Animals;
