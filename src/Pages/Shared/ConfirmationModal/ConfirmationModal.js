import React from 'react';

const ConfirmationModal = ({ title, message, successAction, closeModal }) => {
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={successAction} htmlFor="confirm-modal" className="btn">Confirm</label>
                        <button onClick={closeModal} className="btn btn-outline">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;