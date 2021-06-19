import React, { useState } from 'react';
import Modal from 'react-modal';
import { ListPhoto } from './ListPhoto';
import { BigPhoto } from './BigPhoto';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
};

type PhotoManagerProps = {
  photos: Array<any>,
};

export const PhotoManager: React.FC<PhotoManagerProps> = ({ photos }) => {
  const [state, setState] = useState({
    modalIsOpen: false,
    activeUrl: '',
  });

  const { modalIsOpen, activeUrl } = state;

  const openModal = (url: string): void => {
    setState({ modalIsOpen: false, activeUrl: url });
  };

  const closeModal = (): void => {
    setState({ modalIsOpen: false, activeUrl: '' });
  };

  return (
    <React.Fragment>
      <ListPhoto photos={photos} openModal={openModal} />
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <BigPhoto url={activeUrl} />
      </Modal>
    </React.Fragment>
  );
};
