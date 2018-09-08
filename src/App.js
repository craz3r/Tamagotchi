import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SigninContainer from './containers/signin';
import ChooseHero from './components/choose-hero';
import Game from './components/game';
import Ranks from './components/ranks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={SigninContainer} />
        <Route path="/choose" component={ChooseHero} />
        <Route path="/game" component={Game} />
        <Route path="/ranks" component={Ranks} />
      </div>
    );
  }
}

export default App;
