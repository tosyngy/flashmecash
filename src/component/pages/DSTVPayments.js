import React from "react";
import {
    MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon,
    MDBTable, MDBTableBody, MDBCardText, MDBCardTitle, MDBTableHead
}
    from 'mdbreact';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

class DSTVPayments extends React.Component {
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
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }} >Account</Tab>
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }}>Summary</Tab>
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }}>Transaction</Tab>
                    </TabList>

                    <TabPanel> 
                        <MDBTable fluid>
                            {/* <MDBTableHead>
                                            <tr>
                                                <th>First</th>
                                                <th>Last</th>
                                                <th>Handle</th>
                                            </tr>
                                        </MDBTableHead> */}
                            <MDBTableBody>
                                <tr>
                                    <td colSpan='5' className='text-bold'>5 Accounts</td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>Mark</td>
                                    <td>01234567890</td>
                                    <td className='text-right'><Link color="purple" className='btn-link' to='/'>@mdo</Link></td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>Jacob</td>
                                    <td>01234567890</td>
                                    <td className='text-right'><Link color="purple" to='/' className='btn-link'>@mdo</Link></td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>Larry</td>
                                    <td>01234567890</td>
                                    <td className='text-right'><Link color="purple" to='/' className='btn-link'>@mdo</Link></td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </TabPanel>
                    <TabPanel>
                        <MDBTable fluid>
                            <MDBTableHead>
                                <tr>
                                    <td colSpan='3'>5 Transfer</td>
                                    <td colSpan='3'>
                                        <MDBBtn flat size="sm" className='add-page'>Send Money</MDBBtn>
                                        <MDBBtn flat size="sm" className='add-page white' style={{ width: '200px' }}><MDBIcon icon="filter" className="mr-2" />filter transaction</MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Reciepient</th>
                                    <th>Amount</th>
                                    <th colSpan='2'>Description</th>
                                    <th></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td><span className="dot circledot">OS</span></td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td colSpan='2'>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td><span className="dot circledot">OS</span></td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td colSpan='2'>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td><span className="dot circledot">OS</span></td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td colSpan='2'>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td><span className="dot circledot">OS</span></td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td colSpan='2'>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </TabPanel>
                    <TabPanel>
                        <MDBTable fluid>
                            {/* <MDBTableHead>
                                            <tr>
                                                <th>First</th>
                                                <th>Last</th>
                                                <th>Handle</th>
                                            </tr>
                                        </MDBTableHead> */}
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
                        </MDBTable>
                    </TabPanel>

                </Tabs>
            </MDBRow>
        );
    }
};

export default DSTVPayments;