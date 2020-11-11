// LIBRARIES
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalExample = (props) => {
  const {
    buttonIcon,
    color
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color={color} onClick={toggle}><FontAwesomeIcon icon={buttonIcon} /></Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Demo</ModalHeader>
        <ModalBody>
          This is a demo version. You can't send any messages yet.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Understood</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
