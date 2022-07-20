import React, { Component } from "react";
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import '../styles.css';

class Searchbar extends Component {
    state = {
        pixabayImg: '',
    }

    handleNameChange = e => {
        this.setState({ pixabayImg: e.currentTarget.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.pixabayImg.trim() === '') {
            toast.error("Please fill out something");
            return;
        }

        this.props.onSubmit(this.state.pixabayImg);
        this.setState({ pixabayImg: '' });
    }

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="button-label"><ImSearch style={{ marginRight: 8 }} /></span>
                    </button>
                    <input
                        placeholder="Search images and photos"
                        className="SearchForm-input"
                        type="text"
                        value={this.state.pixabayImg}
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;