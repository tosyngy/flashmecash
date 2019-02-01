import React from "react";
import {
    MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon,
    MDBTable, MDBTableBody, MDBCardText, MDBCardTitle, MDBTableHead,
    MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,Link
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
            modal1: false,
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
    toggle = nr => () => {
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
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }}>Transfer</Tab>
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
                                        <MDBBtn flat size="sm" className='add-page' onClick={this.toggle(1)}>Send Money</MDBBtn>
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
                                    <td><span class="dot circledot">OS</span></td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td colSpan='2'>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td><span class="dot circledot">OS</span></td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td colSpan='2'>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td><span class="dot circledot">OS</span></td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td colSpan='2'>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td><span class="dot circledot">OS</span></td>
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
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered>
                    <MDBModalHeader toggle={this.toggle(1)} className='modal-head'>Send Money</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow md="12">
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input light'>How much do you want to send?</label>
                                <input
                                    type="currency"
                                    id="defaultFormSendMoneyAmountEx"
                                    className="form-control"
                                    placeholder='Amount'
                                />
                            </MDBCol>
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input light'>Send to?</label><br />
                                <input
                                    type="text"
                                    id="defaultFormSendMoneyRecieverIDEx"
                                    className="form-control"
                                    placeholder='Email, Phone No or Account no'
                                />
                            </MDBCol>
                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input light'>Reciever's Name</label><br />
                                <input
                                    type="text"
                                    id="defaultFormSendMoneyNameEx"
                                    className="form-control"
                                    placeholder="Name"
                                />
                            </MDBCol>
                            <u>Or select existing beneficiary</u>

                            <MDBCol md="12" style={{ textAlign: 'left' }}>
                                <label className='reg-input light'>Narration</label><br />
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
                        <MDBBtn color="secondary" onClick={this.toggle(1)}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBRow>
        );
    }
};

export default Account;