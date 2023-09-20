import React from 'react';
import SingleContact from './SingleContact';
import Table from 'react-bootstrap/Table';
import contactStore from '../../stores/contactStore';

const Contacts = () => {
  const store = contactStore();

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>NUMBER</th>
            <th>EMAIL</th>
            <th>GROUP</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.contacts &&
            store.contacts.map((item, index) => {
              return <SingleContact index={index} item={item} key={item._id} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Contacts;
