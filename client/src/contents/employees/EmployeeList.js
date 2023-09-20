import React from 'react';
import SingleEmployee from './SingleEmployee';
import Table from 'react-bootstrap/Table';
import employeeStore from '../../stores/employeeStore';

const Employees = () => {
  const store = employeeStore();

  return (
    <div>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>DEPARTMENT</th>
            <th>NUMBER</th>
            <th>SALARY</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.employees &&
            store.employees.map((item, index) => (
              <SingleEmployee index={index} item={item} key={item._id} />
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employees;
