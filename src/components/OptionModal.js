import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOptionState}
    contentLabel="selected Option"
    closeTimeoutMS={200}
    className="modal"
    >
        <h3 className="modal__title">selected option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button classNmae="button" onClick={props.handleClearSelectedOptionState}>OKAY </button>
    </Modal>
);

export default OptionModal;