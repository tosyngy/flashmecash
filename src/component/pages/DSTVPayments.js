import React from "react";
import {
    MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon,
    MDBTable, MDBTableBody, MDBCardText, MDBCardTitle, MDBTableHead,
    MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter
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
            value: 'coconut'
        }
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSelect = index => {
        this.setState({ selectedIndex: index });
    };

    handleButtonClick = () => {
        this.setState({ selectedIndex: 0 });
    };
    toggleModal = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
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
                                    <td className='text-right'><a color="purple" onClick={this.toggleModal(12)} className='btn-link' to='/'>Renew subscription</a></td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>Jacob</td>
                                    <td>01234567890</td>
                                    <td className='text-right'><a color="purple" onClick={this.toggleModal(12)} to='/' className='btn-link'>Renew subscription</a></td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>Larry</td>
                                    <td>01234567890</td>
                                    <td className='text-right'><a color="purple" onClick={this.toggleModal(12)} to='/' className='btn-link'>Renew subscription</a></td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </TabPanel>
                    <TabPanel>
                       Summary displays here
                        {/* <MDBTable fluid>
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
                        </MDBTable> */}
                    </TabPanel>
                    <TabPanel>
                    Transaction displays here
                        {/* <MDBTable fluid>
                             <MDBTableHead>
                                            <tr>
                                                <th>First</th>
                                                <th>Last</th>
                                                <th>Handle</th>
                                            </tr>
                                        </MDBTableHead> *
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
                    <MDBModal isOpen={this.state.modal12} toggle={this.toggleModal(12)} centered>
                        <MDBModalHeader toggle={this.toggleModal(12)} className='modal-head'>RENEW SUSCRIPTION</MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow md="12">
                                <MDBCol md="12" style={{ textAlign: 'left' }}>
                                    <label className='reg-input'>Full Name</label>
                                    <input
                                        type="name"
                                        id="defaultFormNameEx"
                                        className="form-control"
                                        placeholder='Name'
                                    />
                                </MDBCol>
                                <MDBCol md="12" style={{ textAlign: 'left' }}>
                                    <label className='reg-input'>DSTV Account</label><br />
                                    <input
                                        type="text"
                                        id="defaultFormDSTVAccountEx"
                                        className="form-control"
                                        placeholder='9897878863'
                                        disabled='true'
                                    />
                                </MDBCol>
                                <MDBCol md="12" style={{ textAlign: 'left' }}>
                                    <label className='reg-input'>Account</label><br />
                                    <select className='form-control' value={this.state.value} onChange={this.handleChange}>
                                        <option value="FCMB">FCMB</option>
                                    </select>
                                    {/* <input
                                        type="select"
                                        id="defaultFormBankNameEx"
                                        className="form-control"
                                        placeholder='Bank Name'
                                    /> */}
                                    {/* <MDBSelect color="primary">
                                        <MDBSelectInput selected="Choose your option" />
                                        <MDBSelectOptions>
                                            <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                                            <MDBSelectOption value="1">FCMB</MDBSelectOption>
                                        </MDBSelectOptions>
                                    </MDBSelect> */}
                                </MDBCol>
                                <br />
                                <p></p>
                                <MDBCol md="12">
                                    <div className="form-group d-flex-center mybluecolor col-12">
                                        <label className="bs-switch">
                                            <input type="checkbox" />
                                            <span className="slider round" />
                                        </label>
                                        <span className='mybluecolor font-small'>i have read and agree to the <a className='gold-color' href="/">terms and conditions</a></span>
                                    </div>
                                </MDBCol>

                            </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="white" onClick={this.toggleModal(12)}>Cancel</MDBBtn>
                            <MDBBtn className="mybluecolor" color="primary">Make Payment</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </Tabs>
            </MDBRow>
        );
    }
};

export default DSTVPayments;