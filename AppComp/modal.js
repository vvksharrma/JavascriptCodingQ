//ModalContainer
import React, { useState } from "react";
import Modal from "./modal";

const ModalContainer = () => {
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }
  return (
    <div onClick={() => setShow(false)}>
      <button
        onClick={(e) => {
            e.stopPropagation();
          setShow(true);
        }}
      >
        Open
      </button>
      {show ? <Modal handleClose={handleClose}/> : null}
    </div>
  );
};

export default ModalContainer;

//Modal
import React, { useEffect } from "react";

const Modal = ({ handleClose }) => {
  //for esc button closing modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" || event.keyCode === 27) {
        handleClose();
      }
    };
    document.addEventListener("onKeyDown", handleEscape);

    return () => {
      document.removeEventListener("onKeyDown", handleEscape);
    };
  }, []);

  const backdrop = { 
    position: "fixed", 
    background: "rgba(0, 0, 0, 0.5)",
    top:0,
    bottom:0,
    left:0,
    right:0
 };
 const modalContent={
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
 }
  return (
    <div className={backdrop}>
      <div className={modalContent}>
        <div className="header">
          <span>Heading</span>
          <span onClick={handleClose}>x</span>
        </div>
        <p>This is a modal window.</p>
      </div>
    </div>
  );
};

export default Modal;
