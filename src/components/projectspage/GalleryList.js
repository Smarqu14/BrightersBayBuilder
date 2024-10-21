import React, { useState, memo } from 'react';
import ModalComponent from './ModalComponent';
import GalleryItem from './GalleryItem';

const GalleryList = memo(({ project }) => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      {modal ? (
        <ModalComponent modal={modal} setModal={setModal} project={project} />
      ) : (
        <>
          <h2 className='project__header image__header'>{project.name}</h2>
          <p className='image__view__gallery'>Click images to view gallery</p>
          {/* <Image
            src={project.image}
            className='img-card hover-effect'
            onClick={showModal}
          /> */}
          <GalleryItem project={project} showModal={showModal} />
        </>
      )}
    </>
  );
});

export default GalleryList;
