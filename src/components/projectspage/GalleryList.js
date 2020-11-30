import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import GalleryItem from './GalleryItem';

import { Button, Modal } from 'react-bootstrap';

import { Row, Col, Image } from 'react-bootstrap';

const GalleryList = ({ project }) => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <ModalComponent modal={modal} setModal={setModal} project={project} />
      ) : (
        <>
          {' '}
          <h2>{project.name}</h2>
          <Image src={project.image} className='img-card' />
          <GalleryItem project={project} showModal={showModal} />{' '}
        </>
      )}
    </>
  );
};

export default GalleryList;
