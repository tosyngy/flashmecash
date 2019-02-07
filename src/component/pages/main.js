import React from "react";
import {
    MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon
} from 'mdbreact';
import "react-tabs/style/react-tabs.css";
import '../css/main.css';
import SideBar from './includes/sidebar'
import Header from './includes/header'
import Settings from "./settings";
import Account from "./account";
import DSTVPayments from "./DSTVPayments";
import AirtimeTopUp from "./AirtimeTopUp";
import Cards from "./cards";

class Main extends React.Component {
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
                        <SideBar onLoad={SideBar.getSetter(this.props.match.params.page)}/>
                    </MDBCol>
                    <MDBCol md="9" className="justify-content-around" style={{ height: '60px', padding: '50px 100px' }}>
                        <Header />
                        {!(this.props.match.params.page) && <Account />}
                        {this.props.match.params.page ==='account' && <Account />}
                        {this.props.match.params.page ==='dstv-payments' && <DSTVPayments />}
                        {this.props.match.params.page ==='airtime-top-ups' && <AirtimeTopUp />}
                        {this.props.match.params.page ==='settings' && <Settings />}
                        {this.props.match.params.page ==='cards' && <Cards />}
                    </MDBCol>
                </MDBRow>
                <MDBBtn size="lg" color='yellow' className='floatBTN' icon='300px'><MDBIcon icon="comments" style={{
                    color: '#472864',
                    'font-size': '30px'
                }} /></MDBBtn>
            </MDBContainer>
        );
    }
};

export default Main;