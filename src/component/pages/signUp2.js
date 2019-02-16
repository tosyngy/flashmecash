import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBMedia } from 'mdbreact';
import '../css/form.css';
import logo from "../assests/images/logo-placeholder.png"
// import { Link } from "react-router-dom";

class SignUp2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }
    handleSelect = index => {
        this.setState({ selectedIndex: index });
    };
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
                                        <label className='reg-input'>Choose your financial institution</label>
                                        <select className='form-control' value={this.state.value} onChange={this.handleChange}>
                                        <option value="FCMB">FCMB</option>
                                    </select>
                                        <label className='reg-input'>Enter Account Number</label>
                                        <input
                                            type="Text"
                                            className="form-control actionColor"
                                            placeholder='Account Number'
                                        />
                                        <span className='text-big'>
                                                Hecfgfe
                                        </span><br />
                                        <label className='reg-input'>Enter Code</label>
                                        <input
                                            type="text"
                                            className="form-control actionColor"
                                            placeholder='Code'
                                        />
                                        <br />
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

export default SignUp2;