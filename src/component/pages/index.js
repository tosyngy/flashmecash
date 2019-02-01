import React from "react";
import {
    MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBListGroup, MDBListGroupItem
} from 'mdbreact';
import { Link } from "react-router-dom";

import "react-tabs/style/react-tabs.css";
import '../css/main.css';
import SideBar from './includes/sidebar'
import Header from './includes/header'
import Settings from "./settings";
import Account from "./account";
import DSTVPayments from "./DSTVPayments";
import AirtimeTopUp from "./AirtimeTopUp";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            selectedIndex: 0,
        }
    };
    render() {
        return (
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="3">
                    <MDBListGroup>
                    <MDBListGroupItem><Link to={`/login`}>Login</Link></MDBListGroupItem>
                    <MDBListGroupItem><Link to={`/register`}>Register</Link></MDBListGroupItem>
                </MDBListGroup>
                    </MDBCol>
                </MDBRow>
                {/* <Fab aria-label="Add" className='floatBTN'> */}
                <MDBBtn size="lg" color='yellow' className='floatBTN' icon='300px'><MDBIcon icon="comments" style={{
                    color: '#472864',
                    'font-size': '30px'
                }} /></MDBBtn>
                {/* </Fab> */}
            </MDBContainer>
        );
    }
};

export default Index;