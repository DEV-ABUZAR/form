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
function Fileds() {
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    eventDate: yup.date().required("Event date is required"),
    checkInDate: yup.date().required("Check In Date is required"),
    checkOutDate: yup.date().required("Check Out Date is required"),
    checkInTime: yup.string().required("Check In Time is required"),
    checkOutTime: yup.string().required("Check Out Time is required"),
    earlyCheckInTime: yup.string().required("Early Check In Time is required"),
    lateCheckOutTime: yup.string().required("Late Check Out Time is required"),
    cutOffDate: yup.date().required("Cut Off Date is required"),
    cutOffCost: yup.number().required("Cut Off Cost is required"),
    earlyDepartureCost: yup
      .number()
      .required("Early Departure Cost is required"),
    roomRate: yup.number().required("Room Rate is required"),
    earlyCheckInRate: yup.number().required("Early Check In Rate is required"),
    lateCheckOutFee: yup.number().required("Late Check Out Fee is required"),
    chargeOfExtraPersons: yup
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
        onSubmit={console.log}
        initialValues={{
          username: "",
          password: "",
          eventDate: "",
          checkInDate: "",
          checkOutDate: "",
          checkInTime: "",
          checkOutTime: "",
          earlyCheckInTime: "",
          lateCheckOutTime: "",
          cutOffDate: "",
          cutOffCost: "",
          earlyDepartureCost: "",
          roomRate: "",
          earlyCheckInRate: "",
          lateCheckOutFee: "",
          chargeOfExtraPersons: "",
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
                  controlId="validationFormikCheckInDate"
                >
                  <Form.Label>Check In Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkInDate"
                    value={values.checkInDate}
                    onChange={handleChange}
                    isInvalid={!!errors.checkInDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkInDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikCheckOutDate"
                >
                  <Form.Label>Check Out Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkOutDate"
                    value={values.checkOutDate}
                    onChange={handleChange}
                    isInvalid={!!errors.checkOutDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkOutDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikCheckInTime"
                >
                  <Form.Label>Check In Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Check In Time"
                    name="checkInTime"
                    value={values.checkInTime}
                    onChange={handleChange}
                    isInvalid={!!errors.checkInTime}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkInTime}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikCheckOutTime"
                >
                  <Form.Label>Check Out Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Check Out Time"
                    name="checkOutTime"
                    value={values.checkOutTime}
                    onChange={handleChange}
                    isInvalid={!!errors.checkOutTime}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkOutTime}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikEarlyCheckInTime"
                >
                  <Form.Label>Early Check In Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Early Check In Time"
                    name="earlyCheckInTime"
                    value={values.earlyCheckInTime}
                    onChange={handleChange}
                    isInvalid={!!errors.earlyCheckInTime}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.earlyCheckInTime}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikLateCheckOutTime"
                >
                  <Form.Label>Late Check Out Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Late Check Out Time"
                    name="lateCheckOutTime"
                    value={values.lateCheckOutTime}
                    onChange={handleChange}
                    isInvalid={!!errors.lateCheckOutTime}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lateCheckOutTime}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                {/* 4th Row */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikCutOffDate"
                >
                  <Form.Label>Cut Off Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="cutOffDate"
                    value={values.cutOffDate}
                    onChange={handleChange}
                    isInvalid={!!errors.cutOffDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cutOffDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikCutOffCost"
                >
                  <Form.Label>Cut Off Cost</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Cut Off Cost"
                    name="cutOffCost"
                    value={values.cutOffCost}
                    onChange={handleChange}
                    isInvalid={!!errors.cutOffCost}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cutOffCost}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikEarlyDepartureCost"
                >
                  <Form.Label>Early Departure Cost</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Early Departure Cost"
                    name="earlyDepartureCost"
                    value={values.earlyDepartureCost}
                    onChange={handleChange}
                    isInvalid={!!errors.earlyDepartureCost}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.earlyDepartureCost}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                {/* 5th Row */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikRoomRate"
                >
                  <Form.Label>Room Rate</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Room Rate"
                    name="roomRate"
                    value={values.roomRate}
                    onChange={handleChange}
                    isInvalid={!!errors.roomRate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.roomRate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikEarlyCheckInRate"
                >
                  <Form.Label>Early Check In Rate</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Early Check In Rate"
                    name="earlyCheckInRate"
                    value={values.earlyCheckInRate}
                    onChange={handleChange}
                    isInvalid={!!errors.earlyCheckInRate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.earlyCheckInRate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikLateCheckOutFee"
                >
                  <Form.Label>Late Check Out Fee</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Late Check Out Fee"
                    name="lateCheckOutFee"
                    value={values.lateCheckOutFee}
                    onChange={handleChange}
                    isInvalid={!!errors.lateCheckOutFee}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lateCheckOutFee}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                {/* 6th Row */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikChargeOfExtraPersons"
                >
                  <Form.Label>Charge Of Extra Persons</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Charge Of Extra Persons"
                    name="chargeOfExtraPersons"
                    value={values.chargeOfExtraPersons}
                    onChange={handleChange}
                    isInvalid={!!errors.chargeOfExtraPersons}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.chargeOfExtraPersons}
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
