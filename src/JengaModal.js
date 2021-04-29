import react from 'react';
import BModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function JengaModal({player1Name, player2Name, onHide, ...rest}) {
    return (
      <BModal
        {...rest}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <BModal.Header closeButton>
          <BModal.Title id="contained-modal-title-vcenter">
            Whoe caused the jenga?!
          </BModal.Title>
        </BModal.Header>
        <BModal.Body>
          <p>
            Please select the culprit.
          </p>

          <Button>{player1Name}</Button>
          <Button>{player2Name}</Button>
        </BModal.Body>
        <BModal.Footer>
          <Button onClick={onHide}>Close</Button>
        </BModal.Footer>
      </BModal>
    );
  }

  export default JengaModal;