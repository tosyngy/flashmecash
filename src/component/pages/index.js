import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
    MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, MDBMedia
} from "mdbreact";
import { Link } from "react-router-dom";
import "../css/index.css";
import logo from '../assests/images/logo-placeholder.png';
import mobile1 from '../assests/images/mobile1.png';
import googleplay from '../assests/images/android-app-icon.png';
import applestore from '../assests/images/apple.png';


class Index extends Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const navStyle = { marginTop: "4rem" };
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id="apppage">
                <div>
                    <MDBNavbar color="bg-white" dark expand="md" scrolling transparent>
                        <MDBNavbarBrand href="/">
                            <MDBMedia center href="#">
                                <MDBMedia object center src={logo} alt={"Placeholder"} className='brand-img' />
                            </MDBMedia>
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink to="#" className='btn btn-link text-capitalize font-weight-bold'>About us</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" className='btn btn-link text-capitalize font-weight-bold'>Blog</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" className='btn btn-link text-capitalize font-weight-bold'>Contact</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/login" className='btn btn-link text-capitalize font-weight-bold'>Login</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem active>
                                    <MDBNavLink to="/register" className='btn myblue text-capitalize font-weight-bold'>Sign Up</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                    {this.state.collapsed && overlay}
                </div>
                <MDBView>
                    <MDBMask className="justify-content-center">
                        <MDBContainer className='d-flex'>
                            <MDBCol md="6" xl="5" className="blank-text text-center align-items-center  text-md-left">
                                <h1 className="h1-responsive font-weight-lighter mt-lg-5 ">
                                    An Omnichannel digital bank
                                    </h1>
                                <hr className="hr-light" />
                                <h5 className="mb-4 mybluecolor text-center font-weight-bold">
                                    Digital solution to all your banking needs</h5>
                                <MDBRow>
                                    <MDBCol md="6" xl="5" className="mt-xl-5">
                                        <a href='#'>
                                            <img style={{ width: '100%', padding: '1%' }}
                                                src={applestore}
                                                alt=""
                                                className="img-responsive"
                                            />
                                        </a>
                                    </MDBCol>
                                    <MDBCol md="6" xl="5" className="mt-xl-5">
                                        <a href='#'>
                                            <img style={{ width: '100%' }}
                                                src={googleplay}
                                                alt=""
                                                className="img-responsive"
                                            />
                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md="6" xl="5" className="mt-xl-5 slant  text-center align-items-center">
                                <img
                                    src={mobile1}
                                    alt=""
                                    className="img-responsive "

                                />
                            </MDBCol>
                        </MDBContainer>
                        <MDBRow style={{ padding: '5%' }}>
                            <MDBCol md="12" style={{ backgroundColor: '#eee' }} className='d-flex text-center align-items-center' >
                                <MDBCol md="7" xl="5" className="blank-text text-left align-items-center">
                                    <h3 className="mb-4 mybluecolor text-left font-weight-bold">
                                        Send monney directly to bank accounts, mobile number or email addresses
                                        </h3>
                                    <p className='acc-label' style={{ fontSize: '18px', lineHeight: 2 }}>
                                        Enjoy an Omni-channel banking platform adopted to your lifestyle<br />
                                        FMC is always there for you, whenever you need to send/request money and get paid.
                               </p>
                                </MDBCol>
                                <MDBCol md="5" xl="5" className="mt-xl-5 text-center align-items-center" >
                                    <img style={{ float: 'right' }}
                                        src={mobile1}
                                        alt=""
                                        className="img-responsive "
                                    />
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{ padding: '5%' }} className='d-flex text-center align-items-center'>
                            <MDBCol md="5" xl="5" className="mt-xl-5 text-center align-items-center" >
                                <img style={{ float: 'right' }}
                                    src={mobile1}
                                    alt=""
                                    className="img-responsive"
                                />
                            </MDBCol>
                            <MDBCol md="6" xl="6" className="blank-text text-left align-items-center" style={{ padding: '5%' }}>
                                <h3 className="mb-4 mybluecolor font-weight-bold">
                                    One stop shop for all your payment
                                        </h3>
                                <p className='acc-label' style={{ fontSize: '18px', lineHeight: 1.5 }}>
                                    Track and manage all your payment collections, refunds<br />
                                    payouts and more FREE. Save time to focus on whats happening and make money!
                               </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{ padding: '5%' }} className='d-flex text-center align-items-center'>
                            <MDBCol md="12" xl="12" className="blank-text text-center align-items-center myblue" style={{ padding: '5%' }}>
                                <h3 className="mb-4 gold-color text-center font-weight-bold">
                                    Help us build the kind of bank you want to use
                                        </h3>
                                <p className='acc-label' style={{ fontSize: '18px', lineHeight: 1.5, color: '#fff' }}>
                                    Download the Monzo app on iOS or Android and become<br /> one of the hundred of thousands of people using
                                    better bank
                               </p>
                                <MDBCol style={{ width: '50%', margin: 'auto' }} className='d-flex'>
                                    <MDBCol md="6" xl="5" className="mt-xl-5 align-items-center">
                                        <a href='#'>
                                            <img style={{ width: '100%', padding: '8px' }}
                                                src={applestore}
                                                alt=""
                                                className="img-responsive"
                                            />
                                        </a>
                                    </MDBCol>
                                    <MDBCol md="4" xl="5" className="mt-xl-5 align-items-center">
                                        <a href='#'>
                                            <img style={{ width: '100%' }}
                                                src={googleplay}
                                                alt=""
                                                className="img-responsive"
                                            />
                                        </a>
                                    </MDBCol>
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBMask>
                </MDBView>
                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className='d-flex'>
                            <div className="footer-copyright py-3 col-6" md="6">
                                <MDBContainer fluid>
                                    <a href='/'>&copy; {new Date().getFullYear()} Copyright FCM Limited</a>
                                </MDBContainer>
                            </div>
                            <div className="footer-copyright py-3 pull-right col-6" md="6">
                                <MDBContainer> <span><a href='#'>Term of Use</a></span><span> <a href='#'>Privacy</a></span><span> <a href="#">About Us</a></span></MDBContainer>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className='text-center'>
                            <Link to="/main" className='btn btn-link text-capitalize font-weight-bold'>alternative to menu page</Link>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default Index;