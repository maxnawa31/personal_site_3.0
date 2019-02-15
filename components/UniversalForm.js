import React, { Component } from 'react';
import apiCall from '../services/index';
class UniversalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      artist: '',
      title: '',
      link: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
  };

  determineData = (mode) => {
    let data;
    if (mode === 'books') {
      data = { author, title, link };
    } else if (mode === 'songs') {
      data = { artist, title, link };
    } else {
      data = { title, link };
    }
    return data;
  }
  handleSubmit = e => {
    e.preventDefault();
    const { mode, secondFetch } = this.props;
    let data = this.determineData(mode);
    apiCall(mode, data)
      .then(res => res.json())
      .then(() => secondFetch())
      .catch(() => console.log('error'));

    this.setState({ author: '', artist: '', title: '', link: '' });
  };

  determineInputs(mode) {
    if (mode === 'books') {
      return (
        <input
          onChange={this.handleChange}
          name="author"
          placeholder="author"
        />
      );
    } else if (mode === 'songs') {
      return (
        <input
          onChange={this.handleChange}
          name="artist"
          placeholder="artist"
        />
      );
    } else {
      return null;
    }
  }
  render() {
    const { mode } = this.props;
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input value={this.state.title} onChange={this.handleChange} name="title" placeholder="title" />
        <input value={this.state.link} onChange={this.handleChange} name="link" placeholder="link" />
        {mode === 'movies' ? null :
        <input
          onChange={this.handleChange}
          name={mode === 'books' ? 'author' : 'artist'}
          placeholder={mode === 'books' ? 'author' : 'artist'}
          value={mode === 'books' ? this.state.author : this.state.artist}
        />
      }
        <button>{`Add ${mode}`}</button>
        <style jsx>
          {`
            .form-container {
              display: flex;
              flex-direction: column;
              width: 100%;
              margin-top: 20%;

              align-items: center;
            }
            input {
              width: 75%;
              height: 20px;
              margin-top: 10px;
              outline: none;
              background-color: white;
              padding-left: 10px;
            }

            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
              transition: background-color 5000s ease-in-out 0s;
            }
            button {
              margin-top: 10px;
              width: 50%;
              height: 20px;
            }
          `}
        </style>
      </form>
    );
  }
}

export default UniversalForm;
