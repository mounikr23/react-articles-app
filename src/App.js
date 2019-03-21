import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import ArticleDetails from './pages/ArticleDetails';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
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
