import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBMedia } from 'mdbreact';
import '../css/index.css';
import logo from "../utils/images/logo-placeholder.png"
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }
    render() {
        return (
            <div className="App">
          <header className="App-header">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="4"></MDBCol>
                    <MDBCol md="4">
                        <form>
                            <p className="h4 center mb-4">
                                <MDBMedia center href="#">
                                    <MDBMedia object center src={logo} alt={"Placeholder"} className='logo-img' />
                                </MDBMedia>
                            </p>
                            <input
                                type="email"
                                id="defaultFormLoginEmailEx"
                                className="form-control"
                                placeholder='Phone Number'
                            />
                            <br />
                            <input
                                type="password"
                                id="defaultFormLoginPasswordEx"
                                className="form-control actionColor"
                                placeholder='Password'
                            />
                            <br />
                            <div className="text-center">
                                <MDBBtn color="purple" type="submit" className='largeInput gold-color myblue'>Login to your account</MDBBtn>
                            </div>
                            <div class="form-group text-center ">
                                <a href="/">Forgot your Password?</a>
                            </div>
                            <div className="clearfix-50">
                                <div class="form-group">
                                    <Link class="btn btn-block signup" to={`/main`}>Create an Account</Link>
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