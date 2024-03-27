import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddFieldsModal({ isOpen, onClose, onAddField }) {
  const [label, setLabel] = React.useState('');
  const [type, setType] = React.useState('');

  const handleAddField = () => {
    // Validation logic if needed
    onAddField(label, type);
    setLabel('');
    setType('');
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Field</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Add Field"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
         style={{border:'none' , borderRadius:'10px' ,display:'flex', margin:'auto' , padding:'5px'}}
        />
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddField}>
          Add Field
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddFieldsModal;
