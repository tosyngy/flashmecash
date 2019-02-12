import React from "react";
import {
    MDBRow, MDBCol, MDBBtn, 
    MDBTable, MDBTableBody, 
    MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter
}
    from 'mdbreact';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

class AirtimeTopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            selectedIndex: 0,
            value: 'Airtel'
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
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }} >Airtime Top Up</Tab>
                    </TabList>

                    <TabPanel>
                        <MDBTable fluid>
                            <MDBTableBody>
                                <tr>
                                    <td colSpan='2' className='text-bold'>3 Top-ups</td>
                                    <td colSpan='3' className='text-bold'>
                                        <MDBBtn flat size="sm" className='add-page' onClick={this.toggleModal(12)}>Buy Airtime</MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>Mark</td>
                                    <td>01234567890</td>
                                    <td className='text-right'>20/01/2019</td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>Jacob</td>
                                    <td>01234567890</td>
                                    <td className='text-right'>20/01/2019</td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>Larry</td>
                                    <td>01234567890</td>
                                    <td className='text-right'>20/01/2019</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </TabPanel>
                </Tabs>
                <MDBModal isOpen={this.state.modal12} toggle={this.toggleModal(12)} centered>
                    <MDBModalHeader toggle={this.toggleModal(12)} className='modal-head'>BUY AIRTIME</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow md="12">
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>Phone number</label>
                                <input
                                    type="tel"
                                    id="defaultFormPhoneNoEx"
                                    className="form-control"
                                    placeholder='234 **** *** ***'
                                />
                            </MDBCol>
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>Select network</label><br />
                                <select className='form-control' value={this.state.value} onChange={this.handleChange}>
                                    <option value="Airtel">Airtel</option>
                                    <option value="MTN">MTN</option>
                                    <option value="Glo">Glo</option>
                                    <option value="Etisalat">Etisalat</option>
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

                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>Amount</label><br />
                                <input
                                    type="text"
                                    id="defaultFormAmountEx"
                                    className="form-control"
                                    placeholder='amount'
                                />
                            </MDBCol>
                            <br /><br /><br />
                            <MDBCol md="12">
                                <div className="form-group d-flex-center mybluecolor col-12 text-center">
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

            </MDBRow>
        );
    }
};

export default AirtimeTopUp;