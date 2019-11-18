import React, { Component } from 'react';
import autosize from 'autosize';

class FortuneTeller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      answer: '',
      max: 8,
      placeholder: 'Even though the choice is already made...',
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
    this.setState({ answer: event.target.answer });
  }

  handleSubmit(event) {
    const { value } = this.state;
    const body = {
      question: value,
    };

    fetch('/magic8ball/api/answers/',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
      })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ answer: json });
      });

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
              rows={2}
            />

            <button
              className="center App-button"
              aria-label="Submit"
              type="submit"
              value="Submit"
            >
              Give me an answer
            </button>
          </form>

          {(answer !== '') ? (
            <div>
              <h2>The answer</h2>
              <p>
                {answer}
              </p>
            </div>
          ) : (
            <p>
              {value}
            </p>
          )}
        </div>
      </>
    );
  }
}

export default FortuneTeller;
