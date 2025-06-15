import React from 'react';

class ImageGalleryItem extends React.Component {
  render() {
    return (
      <li className="gallery-item" onClick={this.props.onClick}>
        <img src={this.props.smallURL} alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
