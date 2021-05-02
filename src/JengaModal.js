import react from "react";
import BModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function JengaModal({ player1, player2, onHide, onWinnerClick, ...rest }) {
  const [removedFromCol, setRemovedFromCol] = useState("");
  const [removedFromRow, setRemovedFromRow] = useState("");
  const [replacedOnRow, setReplacedOnRow] = useState("");
  const [replacedOnCol, setReplacedOnCol] = useState("");

  const handleWinnerClick = (winner, loser) => {
    onWinnerClick({
      winner,
      loser,
      removedFromCol,
      removedFromRow,
      replacedOnCol,
      replacedOnRow
    });
  };

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
        <div className="row center">
          <h5 className="col s4 offset-s1 from-on">Removed From:</h5>
          <h5 className="col s4 offset-s2 from-on">Replaced On:</h5>
        </div>

        <div className="row center">
          <div className="col s3 rc">
            <h6 className="row-label1">Row:</h6>
            <input
              placeholder="00"
              id="first_name"
              type="text"
              className="center validate in"
              value={removedFromRow}
              onChange={(e) => setRemovedFromRow(e.target.value)}
            />
          </div>

          <div className="col s3 rc">
            <h6 className="col-label1">Column:</h6>
            <input
              placeholder="00"
              id="first_name"
              type="text"
              className="center validate in"
              value={removedFromCol}
              onChange={(e) => setRemovedFromCol(e.target.value)}
            />
          </div>

          <div className="col s3 rc">
            <h6 className="row-label2">Row:</h6>
            <input
              placeholder="00"
              id="first_name"
              type="text"
              className="validate in center"
              value={replacedOnRow}
              onChange={(e) => setReplacedOnRow(e.target.value)}
            />
          </div>

          <div className="col s3 rc">
            <h6 className="col-label2">Column:</h6>
            <input
              placeholder="00"
              id="first_name"
              type="text"
              className="validate in center"
              value={replacedOnCol}
              onChange={(e) => setReplacedOnCol(e.target.value)}
            />
          </div>
        </div>
        <p>Please select the culprit.</p>

        <Button onClick={(e) => handleWinnerClick(player2, player1)}>
          {player1.name}
        </Button>
        <Button onClick={(e) => handleWinnerClick(player1, player2)}>
          {player2.name}
        </Button>
      </BModal.Body>
      <BModal.Footer>
        <Button onClick={onHide}>Go Back</Button>
      </BModal.Footer>
    </BModal>
  );
}

export default JengaModal;
