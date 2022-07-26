import React, { Component } from "react";
import axios from 'axios';
import ScrollToTop from "react-scroll-to-top";
import galleryAPI from '../services/gallery-api'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './Gallery/ImageGallery'
import Loader from "components/Loader/Loader";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

axios.defaults.baseURL = 'https://pixabay.com/api/';
class App extends Component {
  state = {
    pixabayImg: '',
    pixabay: [],
    selectedImage: null,
    alt: null,

    error: null,
    status: 'idle',
    page: 1,
    limit: 12,
  }
  totallHits = null;

  handleImgSubmit = (pixabayImg) => {
    this.resetAll();
    this.setState({ pixabayImg })
  }

  handleSelectedImg = (largeImageUrl, tags) => {
    this.setState({
      selectedImage: largeImageUrl,
      alt: tags,
    })
  }

  toggleModal = () => {
    this.setState(() => ({
      selectedImage: null,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { pixabayImg, page } = this.state;
    const prevName = prevState.pixabayImg;
    const nextName = this.state.pixabayImg;
    if (prevName !== nextName || prevState.page !== page) {
      this.setState({ status: 'pending' });
      const images = await galleryAPI(pixabayImg, page);
      this.totallHits = images.total;
      const imageHits = images.hits;
      if (!imageHits.length) {
        toast.warning('Nothing was found for your search. Try again!')
      }
      this.setState(({ pixabay }) => ({
        pixabay: [...pixabay, ...imageHits],
        status: 'resolved',
      }))
    }
  }


  handleLoadBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  resetAll = () => {
    this.setState({
      pixabayImg: '',
      pixabay: [],
      selectedImage: null,
      alt: null,

      error: null,
      status: 'idle',
      page: 1,
    })
  }

  render() {
    const { pixabay, status, selectedImage, alt, limit } = this.state;
    return (
      <div className="App">
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            alt={alt}
            onClose={this.toggleModal}
          />)}
        <Searchbar onSubmit={this.handleImgSubmit} status={this.state.status} />
        <ImageGallery pixabay={pixabay} selectedImg={this.handleSelectedImg} />
        {status === 'pending' && <Loader />}
        {pixabay.length > 0 && limit !== this.totallHits && (
          <Button onClick={this.handleLoadBtn} />
        )}
        <ScrollToTop smooth top="5" color="blue" />

        <ToastContainer autoClose={3000} />
      </div>
    )
  }
}

export default App;