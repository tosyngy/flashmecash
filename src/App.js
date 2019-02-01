import React, { Component } from 'react';
import './App.css';
import Login from './component/pages/login'
import Register from './component/pages/register'
import Account from './component/pages/account'
import Card from './component/pages/cards'
import Main from './component/pages/main'
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <ConfigRouter />
    );
  }
}

const ConfigRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/main' component={Main} />
      <Route path='/account' component={Account} />
      <Route path='/card' component={Card} />
      <Route path='/register' component={Register} />
    </Switch>
  </main>
)

export default App;