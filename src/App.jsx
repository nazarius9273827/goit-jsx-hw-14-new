import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import './styles.css';

const API_KEY = '47475037-a019c47be6692940311d6755b';
const PER_PAGE = 12;

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

    this.setState({ isLoading: true });

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({
          images:
            page === 1 ? data.hits : [...prevState.images, ...data.hits],
        }));
      })
      .catch(error => console.error(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchSubmit = newQuery => {
    if (newQuery === this.state.query) return;
    this.setState({ query: newQuery, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = imageURL => {
    this.setState({ selectedImage: imageURL, showModal: true });
  };

  closeModal = () => {
    this.setState({ selectedImage: null, showModal: false });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <>
      <h2>Text</h2>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal imageURL={selectedImage} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
