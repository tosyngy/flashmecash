import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBMedia } from 'mdbreact';
import '../css/form.css';
import logo from "../assests/images/logo-placeholder.png"

class RegistrationOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }
    TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    DELAY = 1500;
    onChangeCapcha = value => {
        console.log("Captcha value:", value);
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
                                        <p className='bd-highlight label-text'>
                                            Send money to anyone's Mobile number, Email Address or Bank Account,
                                            Recieve money or just pay as invoice
                                        </p>
                                    </p>
                                    <p className='bd-highlight label-text instruction'>
                                            HOW WOULD YOU LIKE TO SIGN UP?
                                        </p>
                                    <MDBRow md="12">
                                        <MDBCol md="6" style={{ textAlign: 'left' }}>
                                            <div className="text-center">
                                                <MDBBtn color="purple" type="submit" className='largeInput gold-color' onClick={()=>this.props.history.push("/new-wallet")}>Create New Wallet</MDBBtn>
                                            </div>
                                        </MDBCol>
                                        <MDBCol md="6" style={{ textAlign: 'left' }}>
                                            <div className="text-center">
                                                <MDBBtn color="dark" type="submit" className='largeInput gold-color' onClick={()=>this.props.history.push("/signup-2")}>Use Existing Bank Account</MDBBtn>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </header>
            </div>
        );
    }
};

export default RegistrationOption;