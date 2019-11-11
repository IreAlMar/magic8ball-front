import React from 'react';
import '../styles/App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />

      <Switch>
        <Redirect from="/home" to="/" />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
