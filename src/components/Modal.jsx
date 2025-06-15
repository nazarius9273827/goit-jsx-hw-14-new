import React from 'react';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="overlay" onClick={this.handleOverlayClick}>
        <div className="modal">
          <img src={this.props.imageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
