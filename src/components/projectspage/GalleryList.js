import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import GalleryItem from './GalleryItem';

import { Image } from 'react-bootstrap';

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
          <h2 className='project__header image__header'>{project.name}</h2>
          <Image src={project.image} className='img-card' />
          <GalleryItem project={project} showModal={showModal} />{' '}
        </>
      )}
    </>
  );
};

export default GalleryList;
