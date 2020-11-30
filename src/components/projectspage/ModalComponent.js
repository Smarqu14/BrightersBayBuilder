import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalCarousel from './ModalCarousel';

const ModalComponent = ({ modal, setModal, project }) => {
  return (
    <>
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        dialogClassName='modal__container'
      >
        <ModalCarousel project={project} />
      </Modal>
    </>
  );
};

export default ModalComponent;
