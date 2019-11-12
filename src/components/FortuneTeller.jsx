import React from 'react';

class FortuneTeller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Your question here',
      answer: '',
      max: 8,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRandomInt() {
    const { max } = this.state;
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    fetch(`http://localhost:3000/answers/${this.getRandomInt()}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ answer: json.value });
      });
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    const { answer } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>

          <textarea value={value} onChange={this.handleChange} />

          <input type="submit" value="Submit" />
        </form>
        <h2>The answer</h2>
        <p>
          {answer}
        </p>
      </>
    );
  }
}

export default FortuneTeller;
