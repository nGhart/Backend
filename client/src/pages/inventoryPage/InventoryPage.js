import React, { useEffect } from 'react';
import AddInventory from '../../contents/inventory/AddInventory';
import Inventories from '../../contents/inventory/Inventories';
import inventoryStore from '../../stores/inventoryStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

const InventoryPage = () => {
  const store = inventoryStore();

  useEffect(() => {
    store.getInventories();
  }, [store]);

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // console.log('userLogin', userLogin);
  // console.log('userLogin.userinfo', userLogin.userinfo);
  // console.log('userLogin.userInfo.name', userLogin.userinfo.name);
  // useEffect(() => {}, [userInfo]);

  //const [user, setUser] = useState(null);

  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="title">Inventory</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddInventory />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container style={{ marginTop: '10px' }}>
        <Row>
          <div>
            <Inventories />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default InventoryPage;
