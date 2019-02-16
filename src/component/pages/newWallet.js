import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBMedia } from 'mdbreact';
import '../css/form.css';
import logo from "../assests/images/logo-placeholder.png"
import ReCAPTCHA from "react-google-recaptcha";
// import { Link } from "react-router-dom";

class NewWallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }
    TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    DELAY = 1500;
     onChangeCapcha = value=> {
        console.log("Captcha value:", value);
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
                                        <label className='reg-input'>Enter Phone Number</label>
                                        <input
                                            type="email"
                                            id="defaultFormLoginEmailEx"
                                            className="form-control"
                                            placeholder='Mobile No'
                                        />
                                        <label className='reg-input'>Choose a Password</label>
                                        <input
                                            type="password"
                                            id="defaultFormLoginPasswordEx"
                                            className="form-control actionColor"
                                            placeholder='Password'
                                        />
                                        <label className='reg-input'>Enter a Password Again</label>

                                        <input
                                            type="password"
                                            id="defaultFormLoginPassword2Ex"
                                            className="form-control actionColor"
                                            placeholder='Confirm Password'
                                        />
                                        <br />
                                        <MDBCol md="12"  style={{width:'100% !important', margin:'auto'}}>
                                        <ReCAPTCHA
                                            sitekey={this.TEST_SITE_KEY}
                                            onChange={this.onChangeCapcha}
                                        />
                                        </MDBCol>
                                        
                                        <br />
                                        <div className="text-center">
                                            <MDBBtn color="secondary-color-dark"  type="submit" className='largeInput gold-color myblue'>Continue</MDBBtn>
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

export default NewWallet;