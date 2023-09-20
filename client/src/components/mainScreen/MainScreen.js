import React from 'react';

const MainScreen = ({ title, children }) => {
  return (
    <>
      <div className="mainSection">
        {title && (
          <>
            <h1 className="title">{title}</h1>
          </>
        )}
        {children}
      </div>
    </>
  );
};

export default MainScreen;
