import React from "react";
import {
     MDBRow, MDBCol,MDBBtn, MDBIcon,
} from 'mdbreact';
class Header extends React.Component {
    render() {
        return (
            <MDBRow className='d-flex'>
                <MDBCol size="6" className=" text-left" style={{ height: '70px' }}>
                    <div className="font-weight-bold acc-figure">123456789</div>
                    <span className="font-weight-bold acc-label">ACCOUNT BALANCE</span>
                </MDBCol>
                <MDBCol size="6" className="text-right" style={{ height: '70px' }}>
                    <MDBBtn className='circle' size="lg" color="white"><MDBIcon icon="arrow-right" className='font-bg' /></MDBBtn>
                    <MDBBtn className='circle' size="lg" color="white"><MDBIcon icon="arrow-left" className='font-bg' /></MDBBtn>
                    <MDBBtn className='circle' size="lg" color="white"><MDBIcon icon="undo-alt" className='font-bg' /></MDBBtn>
                </MDBCol>
            </MDBRow>
        );
    }
};

export default Header;