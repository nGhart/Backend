import React, { useState } from 'react';
import EditTransaction from './EditTransaction';
import Modal from 'react-bootstrap/Modal';
import transactionStore from '../../stores/transactionStore';
import Stack from 'react-bootstrap/Stack';
import './transaction.css';

const SingleTransaction = ({ item }) => {
  const store = transactionStore((store) => {
    return {
      editTransaction: store.editTransaction,
      deleteTransaction: store.deleteTransaction,
      handleUpdateTransaction: store.handleUpdateTransaction,
      updateTransaction: store.updateTransaction,
      updateFormTransaction: store.updateFormTransaction,
    };
  });

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editTransaction(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  let colourTransaction;
  colourTransaction =
    item.transactionType === 'Income'
      ? (colourTransaction = 'green')
      : (colourTransaction = 'red');

  return (
    <>
      <Stack gap={3}>
        <div
          className="p-2"
          style={{
            margin: '2px',
            borderRadius: '5px',
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '2px 2px 2px 2px grey',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div className="transactionDetails" style={{ width: '88%' }}>
            <div key={item.id}>
              <div>
                <div
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    fontStyle: 'italic',
                  }}
                >
                  <p style={{ padding: '5px' }}>{item.date}</p>
                  <p style={{ fontStyle: 'italic' }}>
                    Category:{item.category}
                  </p>
                  <p
                    style={{
                      backgroundColor: `${colourTransaction}`,
                      padding: '5px',
                      color: 'white',
                      fontWeight: 700,
                      borderRadius: '5px',
                    }}
                  >
                    {item.transactionType}
                  </p>
                </div>
              </div>
              <div
                style={{
                  margin: 'auto',
                  //width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                {/* <div
                  // xs={8}
                  style={{
                    display: 'flex',
                    //height: '100%',
                    alignItems: 'center',
                  }}
                > */}
                <section>
                  <h6 style={{ fontWeight: 700, textTransform: 'capitalize' }}>
                    {item.name}
                  </h6>
                </section>

                <h6>
                  GHC{' '}
                  <span
                    style={{
                      fontWeight: 'bold',
                    }}
                  >
                    {item.price}
                  </span>
                </h6>
                <p>{item.payment}</p>
              </div>
            </div>
          </div>
          <div
            className="actions"
            style={{
              width: '10%',
              margin: 'auto',
            }}
          >
            <button className="transactionAction" onClick={handleOpenModal}>
              Edit
            </button>
            <button
              className="transactionAction"
              onClick={() => {
                store.deleteTransaction(item._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Stack>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTransaction
            updateTransaction={store.updateTransaction}
            handleUpdateTransaction={store.handleUpdateTransaction}
            updateFormTransaction={store.updateFormTransaction}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default SingleTransaction;
