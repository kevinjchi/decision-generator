import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOptionState}
    contentLabel="selected Option">
        <h3>selected option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOptionState}>OKAY </button>
    </Modal>
);

export default OptionModal;