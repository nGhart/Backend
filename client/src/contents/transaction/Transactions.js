import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import SingleTransaction from './SingleTransaction';
import transactionStore from '../../stores/transactionStore';
import Stack from 'react-bootstrap/Stack';

const Transactions = () => {
  const store = transactionStore();

  useEffect(() => {
    store.getTransactions();
  }, []);

  useEffect(() => {
    if (store.transactions) {
      const totalIncome = store.transactions.reduce((total, transaction) => {
        return transaction.transactionType === 'Income'
          ? total + parseFloat(transaction.price)
          : total;
      }, 0);

      const totalExpenses = store.transactions.reduce((total, transaction) => {
        return transaction.transactionType === 'Expense'
          ? total + parseFloat(transaction.price)
          : total;
      }, 0);

      const balance = totalIncome - totalExpenses;

      store.set((state) => ({
        totalIncomeAndExpenses: {
          ...state.totalIncomeAndExpenses,
          totalIncome: totalIncome.toFixed(2),
          totalExpenses: totalExpenses.toFixed(2),
          balance: balance.toFixed(2),
        },
      }));
    }
  }, [store.transactions]);
  return (
    <>
      <Stack gap={3}>
        <div
          className="p-2 font4"
          style={{
            textAlign: 'center',
            display: 'flex',
            width: '100%',
            height: '50px',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
            backgroundColor: 'rgb(47, 137, 118)',
          }}
        >
          <h4>
            Balance GHC{' '}
            <span
              style={{
                color: `${
                  store.totalIncomeAndExpenses.balance < 0 ? 'red' : 'black'
                }`,
                fontFamily: 'Carter One',
              }}
            >
              {store.totalIncomeAndExpenses.balance}
            </span>
          </h4>
          <h5>
            Income GHC{' '}
            <span
              style={{
                color: 'green',
                fontWeight: '700',
                fontFamily: 'Carter One',
              }}
            >
              {store.totalIncomeAndExpenses.totalIncome}
            </span>
          </h5>
          <h5>
            Expense GHC{' '}
            <span
              style={{
                color: 'red',
                // fontWeight: '700',
                fontFamily: 'Carter One',
              }}
            >
              {store.totalIncomeAndExpenses.totalExpenses}
            </span>
          </h5>
        </div>
      </Stack>

      <Row
        style={{
          width: '100%',
          marginTop: '55px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {store.transactions &&
          store.transactions.map((item) => {
            return <SingleTransaction key={item._id} item={item} />;
          })}
      </Row>
    </>
  );
};

export default Transactions;
