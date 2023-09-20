import React from 'react';
import SingleInventory from './SingleInventory';
import Table from 'react-bootstrap/Table';
import inventoryStore from '../../stores/inventoryStore';

const Inventories = () => {
  const store = inventoryStore();

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>EQUIPMENT</th>
            <th>SERIAL NUMBER</th>
            <th>PURCHASED DATE</th>
            <th>PURCHASE PRICE</th>
            <th>SALE PRICE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.inventories &&
            store.inventories.map((item, index) => {
              return (
                <SingleInventory index={index} item={item} key={item._id} />
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Inventories;
