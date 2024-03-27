import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Navbar from './Nav';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
function Jobs() {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/event/')
      .then(response => {
        setJobData(response.data.getAllEvents);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEdit = (event) => {
    console.log('Edit clicked for event:', event);
  };

  const handleDelete = (eventId) => {
    axios.delete(`http://localhost:5000/api/v1/event/${eventId}`)
      .then(response => {
        toast.success('Event deleted successfully:', response.data);
        setJobData(prevJobData => prevJobData.filter(event => event._id !== eventId));
      })
      .catch(error => {
        toast.error('Error deleting event:', error);
      });
  };
  
  

  return (
    <>
      <Navbar />
      <Header />
      <Container className="mt-4">
        {jobData && jobData.length > 0 && jobData.map((event, index) => (
          <div key={index}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(event).map(([key, value]) => {
                  // Exclude _id, createdAt, updatedAt, and __v fields
                  if (key !== '_id' && key !== 'createdAt' && key !== 'updatedAt' && key !== '__v') {
                    return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    );
                  } else {
                    return null; // Exclude these fields from being displayed
                  }
                })}
              </tbody>
            </Table>
            <div className="btn container" style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button style={{ backgroundColor: '#2cb1bc', border: 'none' }} onClick={() => handleEdit(event)}>Edit</Button>
              <Button style={{ backgroundColor: '#2cb1bc', border: 'none', marginLeft: '10px' }}  onClick={() => handleDelete(event._id)}>Delete</Button>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}

export default Jobs;
