import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import authStore from '../../stores/authStore';
import Table from 'react-bootstrap/Table';
import './print.scss';

const Print = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const handlePrint = () => {
    window.print();
  };

  const store = authStore();
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  let totalDoe = item.doePrice * item.clientDoeCount;
  let totalBuck = item.buckPrice * item.clientBuckCount;
  let totalKit = item.kitPrice * item.clientKitCount;
  //let totalManure = item.ManurePrice * item.clientManureCount;

  // let totalDoe = item.doePrice || 0 * item.clientDoeCount || 0;
  // let totalBuck = item.buckPrice || 0 * item.clientBuckCount || 0;
  // let totalKit = item.kitPrice || 0 * item.clientKitCount || 0;
  // let totalManure = item.ManurePrice || 0 * item.clientManureCount || 0;

  // let totals =
  //   totalDoe || 0 + totalBuck || 0 + totalKit || 0 + totalManure || 0;
  let totals = totalDoe + totalBuck + totalKit;

  return (
    <div
      className="font1"
      style={{
        width: '100vw',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          width: '70%',
          margin: '50px',
          padding: '50px',
        }}
      >
        <div className="businessDetails" style={{ textAlign: 'right' }}>
          {userInfo ? (
            <>
              <img src={userInfo?.pic} alt="Logo" width={100} />
              <h3>{userInfo.name}</h3>
              <h6>{userInfo?.building}</h6>
              <h6>{userInfo?.street}</h6>
              <h6>{userInfo?.city}</h6>
              <h6>{userInfo?.country}</h6>
              <h6>{userInfo?.email}</h6>
              <h6>{userInfo?.number1}</h6>
              <h6>{userInfo?.number2}</h6>
            </>
          ) : (
            <>
              <img src="" alt="Logo" />
              <h3>Business Name</h3>
              <h4>Building</h4>
              <h4>Street</h4>
              <h4>City</h4>
              <h4>Country</h4>
              <h4>Number 1</h4>
              <h4>Number 2</h4>
            </>
          )}
        </div>
        <h1>INVOICE</h1>
        <div className="invoiceDetails">
          {item && (
            <>
              <div
                className="clientDetails"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div>
                  <p>{item.clientName}</p>
                  <p>{item.clientNumber}</p>
                  <p>{item.clientEmail}</p>
                </div>
                <p>{Date().slice(0, 15)}</p>
              </div>
              <div className="purchaseDetails">
                <Table className="tables">
                  <thead variant="dark">
                    <tr>
                      <th></th>
                      <th>ITEM</th>
                      <th>UNIT PRICE</th>
                      <th>UNITS</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>DOE</td>
                      <td>{item.doePrice}</td>
                      <td>{item.clientDoeCount}</td>
                      <td>{totalDoe}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>BUCK</td>
                      <td>{item?.buckPrice}</td>
                      <td>{item.clientBuckCount}</td>
                      <td>{totalBuck}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>KIT</td>
                      <td>{item.kitPrice}</td>
                      <td>{item.clientKitCount}</td>
                      <td>{totalKit}</td>
                    </tr>
                    {/* <tr>
                      <td>4</td>
                      <td>MANURE</td>
                      <td>{item.clientManurePrice}</td>
                      <td>{item.manurePrice}</td>
                      <td>{totalManure}</td>
                    </tr> */}
                    <tr className="totals">
                      <td colSpan={4}>TOTAL</td>
                      <td>{totals}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </>
          )}
        </div>
        <div
          className="printCommand"
          style={{ textAlign: 'right', marginTop: '40px' }}
        >
          <span className="print" onClick={handlePrint}>
            Print
          </span>
        </div>
      </div>
    </div>
  );
};

export default Print;
