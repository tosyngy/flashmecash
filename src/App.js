import React, { Component } from 'react';
import './App.css';
import Login from './component/pages/login'
import Register from './component/pages/register'
import Main from './component/pages/main'
import { Switch, Route } from 'react-router-dom';
import PasswordReset from './component/pages/passwordReset';
import RegistrationOption from './component/pages/registrationOption';
import SignUp from './component/pages/signUp';
import SignUp2 from './component/pages/signUp2';
import Index from './component/pages';


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
      <Route exact path='/' component={Index} />
      <Route path='/login' component={Login} />
      <Route path='/main/:page' component={Main} />
      <Route path='/register' component={Register} />
      <Route path='/password-reset' component={PasswordReset} />
      <Route path='/registration-option' component={RegistrationOption} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signup-2' component={SignUp2} />
    </Switch>

  </main>
)

export default App;