import React from 'react';
import '../styles/index.css';
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
    fetch('http://www.randomtext.me/api/gibberish/p-5/25-45')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ paragraph: json.text_out });
      });
  }

  render() {
    const { paragraph } = this.state;
    return (
      <>
        <h1>
          About me
        </h1>
        <img src={Logo} alt="Magic 8 ball" className="App-logo center" />
        <div dangerouslySetInnerHTML={{ __html: paragraph }} />
      </>
    );
  }
}

export default About;
