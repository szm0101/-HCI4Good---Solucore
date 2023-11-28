import React from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import './ViewEventModal.css';

function ViewEventModal(props) {
  const { date, status, code, description, onHide } = props;

  // Format time stamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const dateString = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const timeString = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    return `${dateString} ${timeString}`;
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: '#4e9fe3' }}>
        <Modal.Title className="text-white fw-bold" id="contained-modal-title-vcenter">
          VIEW EVENT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#3a3e52' }} className='custom-modal-border'>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className='text-white fs-6'>DATE</Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={formatTimestamp(date)}
                style={{ width: '100%' }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white fs-6'>STATUS</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={status === 30 ? (
                  "Guarded"
                ) : status === 10 ? (
                  "Running"
                ) : (
                  status
                )}
                style={{ width: '100%' }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white fs-6'>CODE</Form.Label>
              <Form.Control
                type="text"
                name="code"
                value={code}
                style={{ width: '100%' }}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className='text-white fs-6'>DESCRIPTION</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="description"
                value={description}
                style={{ width: '100%', minHeight: '13rem'}}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className='text-center'>
          <Button className="fs-5 closeView-btn" onClick={onHide}>
            <p className='my-auto mx-3'>
              CLOSE
            </p>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default ViewEventModal;
