import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return <div className={classes.modal}>{props.children}</div>;
}

// const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    // <Fragment>
    //   {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
    //   {ReactDOM.createPortal(
    //     <ModalOverlay>{props.children}</ModalOverlay>,
    //     portalElement
    //   )}
    // </Fragment>
    <Fragment>
      <Backdrop onClose={props.onClose}/>
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
    )
}

export default Modal;
