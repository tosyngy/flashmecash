import React from "react";
import {
    MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon,
} from 'mdbreact';
import "react-tabs/style/react-tabs.css";
import '../css/main.css';
import Card from './cards'
import SideBar from './includes/sidebar'
import Header from './includes/header'

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
                        <SideBar />
                    </MDBCol>
                    <MDBCol md="9" className="justify-content-around" style={{ height: '60px', padding: '50px 100px' }}>
                        <Header />
                        <Card />
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

export default Main;