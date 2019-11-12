import React from 'react';
import '../styles/App.css';
import Logo from '../static/images/logo.png';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paragraph: '',
    };
  }

  componentDidMount() {
    fetch('http://dinoipsum.herokuapp.com/api/?format=json')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ paragraph: json });
      });
  }

  render() {
    const { paragraph } = this.state;
    return (
      <>
        <h1>
          About me
        </h1>
        <img src={Logo} alt="Magic 8 ball" className="App-logo" />
        <div>
          {paragraph}
        </div>
      </>
    );
  }
}

export default About;
