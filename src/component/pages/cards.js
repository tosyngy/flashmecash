import React from "react";
import {
    MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon,
    MDBTable, MDBTableBody
}
    from 'mdbreact';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import ATMTemplate from '../pages/gadget/ATMTemplate'

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            selectedIndex: 0,
        }
    };
    handleSelect = index => {
        this.setState({ selectedIndex: index });
    };

    handleButtonClick = () => {
        this.setState({ selectedIndex: 0 });
    };
    render() {
        return (
            <MDBRow size='12' className="table-tab" >
                <Tabs style={{ width: '100%' }}
                    selectedIndex={this.state.selectedIndex}
                    onSelect={this.handleSelect}
                >
                    <TabList>
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }}>Physical Cards</Tab>
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }}>Virtual Cards</Tab>
                    </TabList>

                    <TabPanel>
                        <MDBRow className='d-flex flex-row' >
                            <MDBCol md='6'>
                                <span className='bd-highlight'>3 cards</span>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBRow className='d-flex flex-row-reverse'>
                                    <MDBBtn flat size="sm" className='add-page'><MDBIcon icon="plus" className="mr-2" />Add card</MDBBtn>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md="12">
                                <MDBRow className='d-flex'>
                                    <div className="col-md-6" style={{marginBottom:'20px'}}>
                                        <ATMTemplate />
                                    </div>
                                    <div className="col-md-6" md='6' style={{marginBottom:'20px'}}>
                                        <ATMTemplate />
                                    </div> 
                                    <div className="col-md-6" md='6' style={{marginBottom:'20px'}}>
                                        <ATMTemplate />
                                    </div>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </TabPanel>
                    <TabPanel>
                    Your Virtual cards displays here
                        {/* <MDBTable fluid>
                            <MDBTableHead>
                                            <tr>
                                                <th>First</th>
                                                <th>Last</th>
                                                <th>Handle</th>
                                            </tr>
                                        </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td colSpan='3'>5 Accounts</td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td> 
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable> */}
                    </TabPanel>
                </Tabs>
            </MDBRow>
        );
    }
};

export default Cards;