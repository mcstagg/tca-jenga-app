import react from 'react';
import BModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Modal(props) {
    return (
      <BModal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <BModal.Header closeButton>
          <BModal.Title id="contained-modal-title-vcenter">
            Whoa there cowpoke...
          </BModal.Title>
        </BModal.Header>
        <BModal.Body>
          <p>
            Please select at least 2 players to start a game.
          </p>
        </BModal.Body>
        <BModal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </BModal.Footer>
      </BModal>
    );
  }

  export default Modal;