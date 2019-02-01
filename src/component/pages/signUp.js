import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBMedia } from 'mdbreact';
import '../css/index.css';
import logo from "../utils/images/logo-placeholder.png"
import ReCAPTCHA from "react-google-recaptcha";
// import { Link } from "react-router-dom";

class SignUp extends React.Component {
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
                                        <p className='bd-highlight' style={{ color: 'rgb(107, 123, 136)', fontSize: '14px', maxWidth: '300px', margin: 'auto' }}>
                                            Send money to anyone's Mobile number, Email Address or Bank Account,
                                            Recieve money or just pay as invoice
                                        </p>
                                    </p>
                                    <form style={{ textAlign: "left" }}>
                                        <label className='reg-input'>Mobile Number</label>
                                        <input
                                            type="email"
                                            id="defaultFormLoginEmailEx"
                                            className="form-control"
                                            placeholder='Mobile No'
                                        />
                                        <label className='reg-input'>Enter Password</label>
                                        <input
                                            type="password"
                                            id="defaultFormLoginPasswordEx"
                                            className="form-control actionColor"
                                            placeholder='Password'
                                        />
                                        <label className='reg-input'>Confirm Password</label>

                                        <input
                                            type="password"
                                            id="defaultFormLoginPassword2Ex"
                                            className="form-control actionColor"
                                            placeholder='Confirm Password'
                                        />
                                        <br />
                                        <span className='text-big'>
                                                Hecfgfe
                                        </span>
                                        <br />
                                        <br />
                                        <input
                                            type="password"
                                            id="defaultFormLoginPassword2Ex"
                                            className="form-control actionColor"
                                            placeholder='Enter Code'
                                        />
                                        <br />
                                        <div className="form-group d-flex-center mybluecolor">
                                        <label className="bs-switch">
                                            <input type="checkbox" />
                                            <span className="slider round" />
                                        </label>
                                        <span className='mybluecolor font-small'>i have read and agree to the <a className='gold-color' href="/">terms and conditions</a></span>
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn color="secondary-color-dark"  type="button" className='large gold-color myblue font-md gold-color' style={{ minWidth: '100%'}}>Continue</MDBBtn>
                                    </div>
                                    </form>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </header>
            </div>
        );
    }
};

export default SignUp;