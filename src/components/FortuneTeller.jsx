import React, { Component } from 'react';
import autosize from 'autosize';

class FortuneTeller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      answer: '',
      max: 8,
      placeholder: 'Even though the choice is already made.',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.textarea.focus();
    autosize(this.textarea);
  }

  getRandomInt() {
    const { max } = this.state;
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    const body = {
      question: value,
      date: new Date(),
    };

    // Control empty request from back end side
    fetch(`http://localhost:3000/answers/${this.getRandomInt()}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ answer: json.value });
      });

    fetch('http://localhost:3000/questions',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
      })
      .then((res) => res.json());

    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    const { answer } = this.state;
    const { placeholder } = this.state;

    return (
      <>
        <div className="center">
          <form onSubmit={this.handleSubmit}>

            <textarea
              ref={(c) => { this.textarea = c; }}
              placeholder={placeholder}
              value={value}
              onChange={this.handleChange}
              rows={1}
            />

            <input className="center" type="submit" value="Submit" />
          </form>
          <h2>The answer</h2>
          <p>
            {answer}
          </p>
        </div>
      </>
    );
  }
}

export default FortuneTeller;
