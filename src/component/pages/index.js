import React from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler,
    MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBMedia
} from 'mdbreact';
import { Link } from "react-router-dom";
import '../css/index.css';
import logo from "../assests/images/logo-placeholder.png"



class FullPageIntroWithFixedTransparentNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
                {/* <header> */}
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

                    {/* <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
                        <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
                            <h2>This Navbar is fixed</h2>
                            <h5>It will always stay visible on the top, even when you scroll down</h5>
                            <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
                            <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
                        </MDBMask>
                    </MDBView> */}
                {/* </header> */}

                    <MDBView className="text-center my-5" transparent>
                        <p align="justify"><Link to='/main'>Alternative to main index page</Link></p>
                        <p align="justify">This will be removed once integration is set</p>
                    </MDBView>
            </div>
        );
    }
}

export default FullPageIntroWithFixedTransparentNavbar;