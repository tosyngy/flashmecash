import React from "react";
import {
    MDBCol, MDBCard, MDBListGroup, MDBListGroupItem
}
    from 'mdbreact';
import { Link } from "react-router-dom";
class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            selectedIndex: 0,
        }
    };
    render() {
        return (
            <MDBCol md="9" style={{ 'border-right': "#472864 solid thin", height: '700px' }} className='p-0'>
                <MDBCard text="white" className="card-head">
                    <MDBCol xl="4" md="3" className="mb-3 text-center">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" style={{ width: '50px' }} className="z-depth-1 rounded-circle" alt="" />
                    </MDBCol>
                    <MDBCol xl="8" md="9" className="mb-9 flex-column" >
                        <span className='username flex-column'>User Name</span><br />
                        <span className='usertitle flex-column'>short description</span>
                        {/* {this.props.match.params.page} */}
                    </MDBCol>
                </MDBCard>
                
                <MDBListGroup>
                    
                    <MDBListGroupItem><Link to={`/main/account`}>Accounts</Link></MDBListGroupItem>
                    <MDBListGroupItem><Link to={`#`}>Transaction</Link></MDBListGroupItem>
                    <MDBListGroupItem><Link to={`/main/cards`}>Cards</Link></MDBListGroupItem>
                    <MDBListGroupItem><Link to={`#`}>ATM Withdrawal</Link></MDBListGroupItem>
                    <MDBListGroupItem><Link to={`/main/dstv-payments`}>DSTV Payments</Link></MDBListGroupItem>
                    <MDBListGroupItem><Link to={`/main/airtime-top-ups`}>Airtime Top-Up</Link></MDBListGroupItem>
                    <MDBListGroupItem><Link to={`#`}>Games and Lottery</Link></MDBListGroupItem>
                </MDBListGroup>
            </MDBCol>
        );
    }
};

export default SideBar;