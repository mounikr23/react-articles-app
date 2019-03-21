import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import ArticleDetails from './pages/ArticleDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <header className="header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p className="logo">Articles Hub</p>
          </header>
        </div>
        <div className="main-container">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/user/:id' component={UserDetails} />
              <Route exact path='/article/:id' component={ArticleDetails} />
            </Switch>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
