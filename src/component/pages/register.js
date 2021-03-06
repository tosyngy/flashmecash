import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBMedia } from 'mdbreact';
import '../css/form.css';
import logo from "../assests/images/logo-placeholder.png"
// import { Link } from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            switch1: true,
        };
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="2"></MDBCol>
                            <MDBCol md="8">
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
                                    <MDBRow md="12">
                                        <MDBCol md="6" style={{ textAlign: 'left' }}>
                                            <label className='reg-input'>First name</label><br />
                                            <input
                                                type="type"
                                                id="defaultFormRegisterFirstNameEx"
                                                className="form-control"
                                                placeholder='First name'
                                            />
                                        </MDBCol>
                                        <MDBCol md="6" style={{ textAlign: 'left' }}>
                                            <label className='reg-input'>Last name</label><br />
                                            <input
                                                type="type"
                                                id="defaultFormRegisterLastNameEx"
                                                className="form-control"
                                                placeholder='Last name'
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow md="12">
                                        <MDBCol md="6" style={{ textAlign: 'left' }}>
                                            <label className='reg-input'>Gender</label><br />
                                            <input
                                                type="type"
                                                id="defaultFormRegisterGenderEx"
                                                className="form-control"
                                                placeholder='Gender'
                                            />
                                        </MDBCol>
                                        <MDBCol md="6" style={{ textAlign: 'left' }}>
                                            <label className='reg-input'>Date of Birth</label><br />
                                            <input
                                                type="date"
                                                id="defaultFormRegisterDOBEx"
                                                className="form-control"
                                                placeholder='**/**/****'
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow md="12">
                                        <MDBCol md="6" style={{ textAlign: 'left' }}>
                                            <label className='reg-input'>Phone</label><br />
                                            <input
                                                type="tel"
                                                id="defaultFormRegisterPhoneEx"
                                                className="form-control"
                                                placeholder='Mobile no.'
                                            />
                                        </MDBCol>
                                        <MDBCol md="6" style={{ textAlign: 'left' }}>
                                            <label className='reg-input'>Email Address(optional)</label><br />
                                            <input
                                                type="email"
                                                id="defaultFormRegisterEmailEx"
                                                className="form-control"
                                                placeholder='Email Address'
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <div className="form-group d-flex-center mybluecolor">
                                        <label className="bs-switch">
                                            <input type="checkbox" />
                                            <span className="slider round" />
                                        </label>
                                        <span className='mybluecolor font-small'>i have read and agree to the <u><a className='gold-color' href="/">terms and conditions</a></u></span>
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn color="secondary-color-dark" type="button" className='large gold-color myblue font-md gold-color' style={{ minWidth: '50%'}}>Sign Up</MDBBtn>
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

export default Register;