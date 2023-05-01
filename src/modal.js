import React from "react";
import './App.css'
function Modal({show,closeModal}){
    if(!show) return null;
    return(
        <div className="modal">
            <div className="overlay" onClick={closeModal}></div>
            <div className="content">
                <h2>Simple Modal</h2>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

export default Modal;