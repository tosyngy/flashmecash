import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBMedia } from 'mdbreact';
import '../css/form.css';
import logo from "../assests/images/logo-placeholder.png"
import { Link } from "react-router-dom";
import AuthService from '../AuthService.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            username: '',
            password: '',
        };
    }
    handleUsername(e) {
        this.setState({ username: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    login(e, clientID, secret) {
        e.preventDefault();
        if (clientID.length === 0) {
            toast.warn("Username Required !", {
                position: toast.POSITION.TOP_RIGHT
            });
            return 0;
        } else if (secret.length === 0) {
            toast.warn("Password Required !", {
                position: toast.POSITION.TOP_RIGHT
            });
            return 0;
        }
        let url = 'https://staging.seerbitapigateway.com/FCMB_BACK/rest/api/oauth';
        let param = {
            clientID,
            secret
        };
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(param),
        }
        fetch(url, options)
            .then((response) => response.json())
            .then(result => {
                if (result.response !== undefined) {
                    toast.error("Invalid Username or Password", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                } else {
                    toast.success("Login Successful !", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    AuthService.setToken(result.access_token)
                    this.props.history.push("/main")
                }
                return result;
            })
            .catch(err => {
                throw err;
            });
    }
    notify = () => {
        toast("Default Notification !")

        toast.error("Error Notification !", {
            position: toast.POSITION.TOP_LEFT
        });

        toast.warn("Warning Notification !", {
            position: toast.POSITION.BOTTOM_LEFT
        });

        toast.info("Info Notification !", {
            position: toast.POSITION.BOTTOM_CENTER
        });

        toast("Custom Style Notification with css class!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MDBContainer>
                        <ToastContainer autoClose={5000}/>
                        <MDBRow>
                            <MDBCol md="4"></MDBCol>
                            <MDBCol md="4">
                                <form onSubmit={(e) => { this.login(e, this.state.username, this.state.password) }}>
                                    <p className="h4 center mb-4">
                                        <MDBMedia center href="#">
                                            <MDBMedia object center src={logo} alt={"Placeholder"} className='logo-img' />
                                        </MDBMedia>
                                    </p>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Phone Number'

                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleUsername.bind(this)}
                                        value={this.state.username}
                                    />
                                   <br />
                                    <input
                                        type="password"
                                        className="form-control actionColor"
                                        placeholder='Password'
                                        onChange={this.handlePassword.bind(this)}
                                        value={this.state.password}
                                    />
                                    <br />
                                    <div className="text-center">
                                        <MDBBtn color="purple" type="submit" className='largeInput gold-color myblue'>Login to your account</MDBBtn>
                                    </div>
                                    <div className="form-group text-center ">
                                        <a href="/password-reset">Forgot your Password?</a>
                                    </div>
                                    <div className="clearfix-50">
                                        <div className="form-group">
                                            <Link className="btn btn-block signup" to={`/registration-option`}>Create an Account</Link>
                                        </div>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </header>
            </div>
        );
    }
};

export default Login;