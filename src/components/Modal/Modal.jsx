import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root")

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount = e => {
        window.removeEventListener('keydown', this.handleKeyDown)
    }


    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    hadleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        const { selectedImage, tags } = this.props;
        return createPortal(
            <div className="Overlay" onClick={this.hadleBackdropClick}>
                <div className="Modal">
                    <img src={selectedImage} alt={tags} />
                </div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;