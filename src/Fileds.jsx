import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import * as yup from "yup";
import Navbar from "./Nav";
import Header from "./Header";
import AddFieldsModal from "./Modal";
import { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Fileds() {
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    eventDate: yup.date().required("Event date is required"),
    checkInndate: yup.date().required("Check In Date is required"),
    checkOutdate: yup.date().required("Check Out Date is required"),
    checkInntime: yup.string().required("Check In Time is required"),
    checkOuttime: yup.string().required("Check Out Time is required"),
    EarlycheckInntime: yup.string().required("Early Check In Time is required"),
    LatecheckOuttime: yup.string().required("Late Check Out Time is required"),
    cutofdate: yup.date().required("Cut Off Date is required"),
    cutofcost: yup.number().required("Cut Off Cost is required"),
    earlydepcost: yup
      .number()
      .required("Early Departure Cost is required"),
    roomrate: yup.number().required("Room Rate is required"),
    EarlycheckInnrate: yup.number().required("Early Check In Rate is required"),
    LatecheckOutfee: yup.number().required("Late Check Out Fee is required"),
    extrapersons: yup
      .number()
      .required("Charge Of Extra Persons is required"),
    remarks: yup.string().required("Remarks is required"),
  });
  const [fields, setFields] = useState(() => {
    const storedFields = localStorage.getItem("fields");
    return storedFields ? JSON.parse(storedFields) : [];
  });
  useEffect(() => {
    // Update localStorage whenever fields change
    localStorage.setItem("fields", JSON.stringify(fields));
  }, [fields]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddField = (label, type) => {
    setFields([...fields, { label, type }]);
  };

  const deleteField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };
  return (
    <>
      <Formik
        validationSchema={schema}
        
        onSubmit={(values, { setSubmitting }) => {
         // Inside your Axios request
axios.post('http://localhost:5000/api/v1/event/', values)
.then(response => {
  console.log('Response:', response.data);
  if (response.status === 201) {
    // Show toast notification for successful job creation
    toast.success('Event successfully created!', {
     
    });
  }
  // You can handle the response here
})
.catch(error => {
  console.error('Error:', error);
  // Show toast notification for error
  toast.error('Something went wrong!', {
    
  });
  // You can handle errors here
})
.finally(() => {
  setSubmitting(false);
});

        }}
        
        initialValues={{
          username: "",
          password: "",
          eventDate: "",
          checkInndate: "",
          checkOutdate: "",
          checkInntime: "",
          checkOuttime: "",
          EarlycheckInntime: "",
          LatecheckOuttime: "",
          cutofdate: "",
          cutofcost: "",
          earlydepcost: "",
          roomrate: "",
          EarlycheckInnrate: "",
          LatecheckOutfee: "",
          extrapersons: "",
          remarks: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Navbar />
            <Header />
            <div className="container">
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikEventDate"
                >
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="eventDate"
                    value={values.eventDate}
                    onChange={handleChange}
                    isInvalid={!!errors.eventDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.eventDate}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikcheckInndate"
                >
                  <Form.Label>Check In Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkInndate"
                    value={values.checkInndate}
                    onChange={handleChange}
                    isInvalid={!!errors.checkInndate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkInndate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikcheckOutdate"
                >
                  <Form.Label>Check Out Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkOutdate"
                    value={values.checkOutdate}
                    onChange={handleChange}
                    isInvalid={!!errors.checkOutdate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkOutdate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikcheckInntime"
                >
                  <Form.Label>Check In Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Check In Time"
                    name="checkInntime"
                    value={values.checkInntime}
                    onChange={handleChange}
                    isInvalid={!!errors.checkInntime}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkInntime}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikcheckOuttime"
                >
                  <Form.Label>Check Out Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Check Out Time"
                    name="checkOuttime"
                    value={values.checkOuttime}
                    onChange={handleChange}
                    isInvalid={!!errors.checkOuttime}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkOuttime}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikEarlycheckInntime"
                >
                  <Form.Label>Early Check In Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Early Check In Time"
                    name="EarlycheckInntime"
                    value={values.EarlycheckInntime}
                    onChange={handleChange}
                    isInvalid={!!errors.EarlycheckInntime}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.EarlycheckInntime}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikLatecheckOuttime"
                >
                  <Form.Label>Late Check Out Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Late Check Out Time"
                    name="LatecheckOuttime"
                    value={values.LatecheckOuttime}
                    onChange={handleChange}
                    isInvalid={!!errors.LatecheckOuttime}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.LatecheckOuttime}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                {/* 4th Row */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikcutofdate"
                >
                  <Form.Label>Cut Off Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="cutofdate"
                    value={values.cutofdate}
                    onChange={handleChange}
                    isInvalid={!!errors.cutofdate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cutofdate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikcutofcost"
                >
                  <Form.Label>Cut Off Cost</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Cut Off Cost"
                    name="cutofcost"
                    value={values.cutofcost}
                    onChange={handleChange}
                    isInvalid={!!errors.cutofcost}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cutofcost}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikearlydepcost"
                >
                  <Form.Label>Early Departure Cost</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Early Departure Cost"
                    name="earlydepcost"
                    value={values.earlydepcost}
                    onChange={handleChange}
                    isInvalid={!!errors.earlydepcost}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.earlydepcost}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                {/* 5th Row */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikroomrate"
                >
                  <Form.Label>Room Rate</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Room Rate"
                    name="roomrate"
                    value={values.roomrate}
                    onChange={handleChange}
                    isInvalid={!!errors.roomrate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.roomrate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikEarlycheckInnrate"
                >
                  <Form.Label>Early Check In Rate</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Early Check In Rate"
                    name="EarlycheckInnrate"
                    value={values.EarlycheckInnrate}
                    onChange={handleChange}
                    isInvalid={!!errors.EarlycheckInnrate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.EarlycheckInnrate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikLatecheckOutfee"
                >
                  <Form.Label>Late Check Out Fee</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Late Check Out Fee"
                    name="LatecheckOutfee"
                    value={values.LatecheckOutfee}
                    onChange={handleChange}
                    isInvalid={!!errors.LatecheckOutfee}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.LatecheckOutfee}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                {/* 6th Row */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikextrapersons"
                >
                  <Form.Label>Charge Of Extra Persons</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Charge Of Extra Persons"
                    name="extrapersons"
                    value={values.extrapersons}
                    onChange={handleChange}
                    isInvalid={!!errors.extrapersons}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.extrapersons}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormikRemarks">
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Remarks"
                    name="remarks"
                    value={values.remarks}
                    onChange={handleChange}
                    isInvalid={!!errors.remarks}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.remarks}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                {fields.map((field, index) => (
                  <Col md="4" key={index}>
                    <Form.Group controlId={`customField${index}`}>
                      <Form.Label>{field.label}</Form.Label>
                      <Form.Control
                        type={field.type}
                        placeholder={`Enter ${field.label}`}
                        name={`customField${index}`}
                        // You can add onChange handler here
                      />
                    </Form.Group>
                    <img
                      src="./trash.png"
                      width={20}
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteField(index)}
                    ></img>
                  </Col>
                ))}
              </Row>
              <Row className="mb-3">
                <Col md={{ span: 4, offset: 4 }} className="text-end">
                  <Button
                    type="submit"
                    style={{
                      width: " -webkit-fill-available",
                      backgroundColor: "#2cb1bc",
                      border: "none",
                    }}
                  >
                    Submits Form
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        )}
      </Formik>
      <Row className="mb-3">
        <Col md={{ span: 4, offset: 4 }} className="text-end">
          <Button
            type="btin"
            style={{
              backgroundColor: "#2cb1bc",
              border: "none",
              display: "flex",
              justifyContent: "center",
              width: "76%",
              margin: "auto",
            }}
            onClick={handleOpenModal}
          >
            
            Add New Field
          </Button>
        </Col>
      </Row>
      <AddFieldsModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onAddField={handleAddField}
      />
    </>
  );
}

export default Fileds;
