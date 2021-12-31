import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isOpened, setModalOpened, title, ...props }) => {
    console.log(isOpened);
    return (
        isOpened
            ? ReactDOM.createPortal(
                <>
                    <div className="rml-modal-overlay">
                        <div className="rml-modal-wrapper">
                            <div className="rml-modal">
                                <div className="rml-modal-header">
                                    <h4>{title}</h4>
                                    <button
                                        type="button"
                                        className="rml-modal-close-button"
                                        onClick={() => {setModalOpened(false)}}
                                    >
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="rml-modal-body">{props.children}</div>
                                <div className="rml-modal-footer">
                                    <button type="button" className="btn btn-default" onClick={() => {setModalOpened(false)}}>Fermer</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx="true">{`
            .rml-modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1040;
              background-color: rgba(0, 0, 0, 0.5);
            }

            .rml-modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1050;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .rml-modal {
              z-index: 100;
              background: #fff;
              position: relative;
              margin: auto;
              border-radius: 5px;
              max-width: 500px;
              width: 80%;
              padding: 0;
            }

            .rml-modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 18px 25px 15px;
            }
            .rml-modal-header h4 {
                font-size: 15px;
                margin: 0;
            }
            .rml-modal-body {
                padding: 25px;
            }
            .rml-modal-body p:first-child {
                margin-top: 0;
            }
            .rml-modal-close-button {
              font-size: 1.4rem;
              font-weight: 700;
              color: #000;
              cursor: pointer;
              border: none;
              background: transparent;
            }
            .rml-modal-footer {
              padding: 0 25px 15px 25px;
              display: flex;
              align-items: center;
              justify-content: flex-end;
            }
          `}</style>
                </>,
                document.body
            )
            : null
    )

}


Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    setModalOpened: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default Modal;
