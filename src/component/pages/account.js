import React from "react";
import {
    MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon,
    MDBTable, MDBTableBody, MDBCardText, MDBCardTitle, MDBTableHead,
    MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, Link, MDBSelect, MDBSelectOption, MDBSelectInput, MDBSelectOptions,
}
    from 'mdbreact';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Line } from "react-chartjs-2";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            selectedIndex: 0,
            modal12: false,
            dataLine: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        // label: "My First dataset",
                        fill: false,
                        lineTension: 0,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "#472864",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 8,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        // label: "My Second dataset",
                        fill: false,
                        lineTension: 0,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "#472864",
                        borderCapStyle: "butt",
                        // borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "#472864",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 8,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#472864",
                        pointHoverBorderColor: "#fbcf20",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [85, 19, 8, 1, 56, 55, 30]
                    }
                ]
            }
        };
    }
    handleSelect = index => {
        this.setState({ selectedIndex: index });
    };

    handleButtonClick = () => {
        this.setState({ selectedIndex: 0 });
    };
    toggleModal = (nr,nc=0) => () => {
        let modalNumberClose = 'modal' + nc
        this.setState({
            [modalNumberClose]: false
        });

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
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }}>Beneficiary</Tab>
                    </TabList>

                    <TabPanel>
                        <MDBRow className='d-flex flex-row' >
                            <MDBCol md="6">
                                <MDBRow className='d-flex'>
                                    <MDBCard className="card-body col-md-5">
                                        <MDBCardTitle className='head-title'>Wema Bank</MDBCardTitle>
                                        <MDBCardText>
                                            123445
                                        </MDBCardText>
                                    </MDBCard>
                                    <MDBCard className="card-body col-md-5">
                                        <MDBCardTitle className='head-title'>Wema Bank</MDBCardTitle>
                                        <MDBCardText>
                                            123445
                                        </MDBCardText>
                                    </MDBCard>
                                </MDBRow>
                                <MDBRow className='d-flex'>
                                    <MDBCard className="card-body col-md-5">
                                        <MDBCardTitle className='head-title'>Wema Bank</MDBCardTitle>
                                        <MDBCardText>
                                            123445
                                        </MDBCardText>
                                    </MDBCard>
                                    <MDBCard className="card-body col-md-5">
                                        <MDBCardTitle className='head-title'>Wema Bank</MDBCardTitle>
                                        <MDBCardText>
                                            123445
                                        </MDBCardText>
                                    </MDBCard>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBRow className='d-flex flex-row-reverse'>
                                    <MDBBtn flat size="sm" className='add-page' style={{ width: '200px' }}><MDBIcon icon="plus" className="mr-2" />Add new account</MDBBtn>
                                </MDBRow>
                                <MDBRow className='d-flex flex-row-reverse'>
                                    <MDBBtn flat size="sm" className='add-page' style={{ width: '200px' }}><MDBIcon icon="plus" className="mr-2" />Add new wallet</MDBBtn>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <Line data={this.state.dataLine} options={{ responsive: true }} />
                        </MDBRow>
                    </TabPanel>
                    <TabPanel>
                        <MDBTable fluid>
                            <MDBTableHead>
                                <tr>
                                    <td colSpan='3'>5 Transfer</td>
                                    <td colSpan='3'>
                                        <MDBBtn flat size="sm" className='add-page' onClick={this.toggleModal(14)}>Send Money</MDBBtn>
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
                            <MDBTableHead>
                                <tr>
                                    <td colSpan='3'>5 Beneficiaries</td>
                                    <td colSpan='3'>
                                        <MDBBtn flat size="sm" className='add-page' style={{ width: '150px' }} onClick={this.toggleModal(12)}>
                                            <MDBIcon icon="plus" className="mr-2" />
                                            Add Beneficiary
                                        </MDBBtn>
                                    </td>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td><span className="dot circledot">OS</span></td>
                                    <td>Koala ologu</td>
                                    <td>0000000000(FCMB)</td>
                                    <td colSpan='3' className='text-right'>09/09/8362</td>
                                </tr>
                                <tr>
                                    <td><span className="dot circledot">OS</span></td>
                                    <td>Koala ologu</td>
                                    <td>0000000000(FCMB)</td>
                                    <td colSpan='3' className='text-right'>09/09/8362</td>
                                </tr>
                                <tr>
                                    <td><span className="dot circledot">OS</span></td>
                                    <td>Koala ologu</td>
                                    <td>0000000000(FCMB)</td>
                                    <td colSpan='3' className='text-right'>09/09/8362</td>
                                </tr>
                                <tr>
                                    <td><span className="dot circledot">OS</span></td>
                                    <td>Koala ologu</td>
                                    <td>0000000000(FCMB)</td>
                                    <td colSpan='3' className='text-right'>09/09/8362</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </TabPanel>
                </Tabs>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggleModal(14)} centered>
                    <MDBModalHeader toggle={this.toggleModal(14)} className='modal-head'>Send Money</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow md="12">
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>How much do you want to send?</label>
                                <input
                                    type="currency"
                                    id="defaultFormSendMoneyAmountEx"
                                    className="form-control"
                                    placeholder='Amount'
                                />
                            </MDBCol>
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>Send to?</label><br />
                                <input
                                    type="text"
                                    id="defaultFormSendMoneyRecieverIDEx"
                                    className="form-control"
                                    placeholder='Email, Phone No or Account no'
                                />
                            </MDBCol>
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>Reciever's Name</label><br />
                                <input
                                    type="text"
                                    id="defaultFormSendMoneyNameEx"
                                    className="form-control"
                                    placeholder="Name"
                                />
                            </MDBCol>
                            <MDBCol className='text-center'>
                                <u>Or select existing beneficiary</u>
                            </MDBCol>
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>Narration</label><br />
                                <input
                                    type="text"
                                    id="defaultFormSendMoneyNarrationEx"
                                    className="form-control"
                                    placeholder='Last name'
                                />
                            </MDBCol>
                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="white" onClick={this.toggleModal(14)}>Cancel</MDBBtn>
                        <MDBBtn color="primary" onClick={this.toggleModal(13,14)}>Send Money</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                <MDBModal isOpen={this.state.modal13} toggle={this.toggleModal(13)} centered>
                    <MDBModalHeader toggle={this.toggleModal(13)} className='modal-head'>Send Money</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow md="12">
                            <p className='bd-highlight text-center' style={{ color: '#472864', fontWeight: 'bold', fontSize: '14px', maxWidth: '250px', margin: 'auto' }}>
                                Please enter the OTP that was sent to your mobile no 090******74
                                        </p><br />
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <input
                                    type="text"
                                    id="defaultFormSendMoneyNarrationEx"
                                    className="form-control"
                                    placeholder='Enter OTP'
                                /><br />
                            </MDBCol>
                            <u className='reg-input' style={{ margin: 'auto' }}>Resend OTP</u>
                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="white" onClick={this.toggleModal(13)}>Cancel</MDBBtn>
                        <MDBBtn color="primary">Confirm OTP</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                <MDBModal isOpen={this.state.modal12} toggle={this.toggleModal(12)} centered>
                    <MDBModalHeader toggle={this.toggleModal(12)} className='modal-head'>Add Beneficiary</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow md="12">
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>Beneficiary Name</label>
                                <input
                                    type="name"
                                    id="defaultFormNameEx"
                                    className="form-control"
                                    placeholder='Name'
                                />
                            </MDBCol>
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>Account No</label><br />
                                <input
                                    type="text"
                                    id="defaultFormRecieverIDEx"
                                    className="form-control"
                                    placeholder='Email, Phone No or Account no'
                                />
                            </MDBCol>
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input'>Bank Name</label><br />
                                <select className='form-control' value={this.state.value} onChange={this.handleChange}>
                                    <option value="FCMB">0902562562(FCMB)</option>
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
                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="white" onClick={this.toggleModal(12)}>Cancel</MDBBtn>
                        <MDBBtn color="primary">Add Beneficiary</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>

            </MDBRow>
        );
    }
};

export default Account;