import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends React.Component {
  render() {
    return (
      <ul className="gallery">
        {this.props.images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            smallURL={webformatURL}
            largeURL={largeImageURL}
            onClick={() => this.props.onImageClick(largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
