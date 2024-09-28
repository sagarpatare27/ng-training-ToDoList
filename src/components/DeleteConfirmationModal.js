// DeleteConfirmationModal.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteConfirmationModal = ({ show, onHide, taskName, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to delete task <strong>{taskName}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>No</Button>
        <Button variant="danger" onClick={onConfirm}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;
