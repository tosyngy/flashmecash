import React, { Component } from 'react';
import './App.css';
import Login from './component/pages/login'
import Register from './component/pages/register'
import Account from './component/pages/account'
import Card from './component/pages/cards'
import Main from './component/pages/main'
import { Switch, Route } from 'react-router-dom';
import PasswordReset from './component/pages/passwordReset';
import RegistrationOption from './component/pages/registrationOption';
import DSTVPayments from './component/pages/DSTVPayments';
import AirtimeTopUp from './component/pages/AirtimeTopUp';
import SignUp from './component/pages/signUp';
import SignUp2 from './component/pages/signUp2';


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
      <Route path='/password-reset' component={PasswordReset} />
      <Route path='/registration-option' component={RegistrationOption} />
      <Route path='/dstv-payments' component={DSTVPayments} />
      <Route path='/airtime-top-ups' component={AirtimeTopUp} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signup-2' component={SignUp2} />

    </Switch>
  </main>
)

export default App;