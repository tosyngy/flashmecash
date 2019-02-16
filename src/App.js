import React, { Component } from 'react';
import './App.css';
import Login from './component/pages/login'
import Register from './component/pages/register'
import Main from './component/pages/main'
import { Switch, Route } from 'react-router-dom';
import RegistrationOption from './component/pages/registrationOption';
import SignUp from './component/pages/signUp';
import SignUp2 from './component/pages/signUp2';
import Index from './component/pages';
import NewWallet from './component/pages/newWallet';
import NotFound from './component/pages/notFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Offline, Online } from "react-detect-offline";
import AuthService from './component/AuthService';


class App extends Component {
  render() {
    return (
      <div>
        {/* <ToastContainer autoClose={5000} /> */}
        <Online onChange={(value) => { if (value) toast.success("You are now Connection !!!", { position: toast.POSITION.TOP_CENTER }) }}></Online>
        <Offline onChange={(value) => { if (!value) toast.warn("Not Internet Connection !!!", { position: toast.POSITION.TOP_CENTER }) }}></Offline>
        <ConfigRouter />
      </div>
    );
  }
}

const ConfigRouter = () => (
  <main>
    {AuthService.loggedIn() &&
      <Switch>
        <Route path='/main/:page' component={Main} />
        <Route path='/main' component={Main} />
        <Route path='/' component={Main} />
        <Route path='/new-wallet' component={NewWallet} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signup-2' component={SignUp2} />
        <Route component={NotFound} />
      </Switch>
    }{!AuthService.loggedIn() &&
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/registration-option' component={RegistrationOption} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signup-2' component={SignUp2} />
        <Route component={Index} />
      </Switch>
    }

  </main>
)

export default App;