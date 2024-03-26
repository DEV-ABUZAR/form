import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from './Nav';
import Header from './Header';

function Jobs() {
  return (
    <>
    <Navbar />
    <Header />
    <Container className="d-flex justify-content-center mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Username</td>
            <td>User123</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>Pass123</td>
          </tr>
          <tr>
            <td>Event Date</td>
            <td>2024-04-01</td>
          </tr>
          <tr>
            <td>Check In Date</td>
            <td>2024-04-02</td>
          </tr>
          <tr>
            <td>Check Out Date</td>
            <td>2024-04-05</td>
          </tr>
          <tr>
            <td>Check In Time</td>
            <td>10:00 AM</td>
          </tr>
          <tr>
            <td>Check Out Time</td>
            <td>12:00 PM</td>
          </tr>
          <tr>
            <td>Early Check In Time</td>
            <td>9:00 AM</td>
          </tr>
          <tr>
            <td>Late Check Out Time</td>
            <td>2:00 PM</td>
          </tr>
          <tr>
            <td>Cut Off Date</td>
            <td>2024-03-31</td>
          </tr>
          <tr>
            <td>Cut Off Cost</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>Early Departure Cost</td>
            <td>$30</td>
          </tr>
          <tr>
            <td>Room Rate</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Early Check In Rate</td>
            <td>$20</td>
          </tr>
          <tr>
            <td>Late Check Out Fee</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>Charge Of Extra Persons</td>
            <td>$10</td>
          </tr>
          <tr>
            <td>Remarks</td>
            <td>This is a test remark.</td>
          </tr>
        </tbody>
      </Table>
    </Container>
    <div className="btn container" style={{display:'flex', justifyContent:'flex-start'}}>
    <Button  style={{ backgroundColor:'#2cb1bc', border:'none'}}>Edit</Button>
    <Button  style={{ backgroundColor:'#2cb1bc' , border:'none' , marginLeft:'10px'}}>Delete</Button>
    </div>

    </>
  );
}

export default Jobs;
