import React, {Component} from 'react';


class MoviesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      link: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, link } = this.state;
    const data = { title, link };
    fetch('https://max-personal-website-backend.herokuapp.com/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => this.props.fetchMovies())
      .catch(error => console.log('error'));

    this.setState({ title: '', link: '' });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="title" placeholder="title" />
        <input onChange={this.handleChange} name="link" placeholder="link" />
        <button type="submit">Add Movie</button>
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

export default MoviesForm;