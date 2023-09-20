import React from 'react';
import MainScreen from './mainScreen/MainScreen';

import Alert from 'react-bootstrap/Alert';
const ErrorPage = ({ variant = 'info', children }) => {
  return (
    <>
      <MainScreen title="Error">
        <Alert className="errorContainer">
          <h1>{children}</h1>
        </Alert>
      </MainScreen>
    </>
  );
};

export default ErrorPage;
