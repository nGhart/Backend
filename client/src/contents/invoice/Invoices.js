import React from 'react';
import SingleInvoice from './SingleInvoice';
import Table from 'react-bootstrap/Table';
import invoiceStore from '../../stores/invoiceStore';

const Invoices = () => {
  const store = invoiceStore();

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>NUMBER</th>
            <th>EMAIL</th>
            <th>DOE PRICE</th>
            <th>DOE COUNT</th>
            <th>BUCK PRICE</th>
            <th>BUCK COUNT</th>
            <th>KIT PRICE</th>
            <th>KIT COUNT</th>
            {/* <th>MANURE PRICE</th>
            <th>MANURE COUNT</th> */}
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.invoices &&
            store.invoices.map((item, index) => {
              return <SingleInvoice index={index} item={item} key={item._id} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Invoices;
