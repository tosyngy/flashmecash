import React from "react";
import {
    MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon,
    MDBTable, MDBTableBody, MDBCardText, MDBCardTitle, MDBTableHead,
    MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBAlert
}
    from 'mdbreact';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Line } from "react-chartjs-2";
import AuthService from '../AuthService.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transferData: [],
            collapse: false,
            selectedIndex: 0,
            modal12: false,
            amount: '0',
            reciever: '',
            name: '',
            narration: '',
            errTrans: 'd-none',
            errText: '',
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

    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handleAmount(e) {
        this.setState({ amount: e.target.value })
    }
    handleReciever(e) {
        this.setState({ reciever: e.target.value })
    }
    handleNarration(e) {
        this.setState({ narration: e.target.value })
    }
    handleSelect = index => {
        this.setState({ selectedIndex: index });
    };

    handleButtonClick = () => {
        this.setState({ selectedIndex: 0 });
    };
    toggleModal = (nr, nc = 0) => () => {
        let modalNumberClose = 'modal' + nc
        this.setState({
            [modalNumberClose]: false
        });

        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });

    }
    fetchDetails = (token) => {
        if (AuthService.isTokenExpired(AuthService.getToken())) {
            alert('SESSION expired please login')
            this.props.history.push("/login")
        }

        let url = 'https://staging.seerbitapigateway.com/FCMB_BACK/rest/api/transaction/getSendMoneyByMail?page=1&pageSize=5';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ mobilePhone: '2347053191016' }),
        }
        fetch(url, options)
            .then((response) => response.json())
            .then(result => {
                console.log(result)
                this.setState({ transferData: result })
            })
            .catch(err => {
                throw err;
            });
    }
    errHandler = ({ ...param }) => {
        for (let i in param) {
            if (param[i]==="" || param[i]===0)
                return `${this.toDash(i)} is required !`;
        }
        return false;
    }
    toDash = function(i){
        return i.replace(/([A-Z])/g, function($1){return " "+$1.toLowerCase();});
    };

    sendMoney = (e, amount, recieverEmail, name, narration) => {
        if (AuthService.isTokenExpired(AuthService.getToken())) {
            alert('SESSION expired please login')
            this.props.history.push("/login")
        }
        e.preventDefault();
        var validate=this.errHandler({ amount, recieverEmail, name, narration });
        if (validate) {
            toast.warn(validate, {
                position: toast.POSITION.TOP_RIGHT
            });
            return 0;
        }

        let url = 'https://staging.seerbitapigateway.com/FCMB_BACK/rest/api/transaction/sendMoneyByMAil';
        let param = {
            "mobilePhone": "2347053191016", //based on sender registration
            "senderEmail": "test@test.com",  //based on sender registration
            recieverEmail,
            amount,
            narration,
        };
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': AuthService.getToken()
            },
            body: JSON.stringify(param),
        }
        fetch(url, options)
            .then((response) => response.json())
            .then(result => {
                if (result.response !== undefined) {
                    toast.error("Error Request !!!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                } else {
                    this.toggleModal(14)
                    toast.success("Transaction Successful !", {
                        position: toast.POSITION.TOP_CENTER
                    });
                  }
                return result;
            })
            .catch(err => {
                throw err;
            });
    }
    componentDidMount = () => {
        this.fetchDetails(AuthService.getToken());
    }
    render() {
        let rows = this.state.transferData.map(row => {
            return <PersonRow key={
                row.id
            }
                data={
                    row
                }
            />
        })
        return (
            <MDBRow size='12' className="table-tab" >
                <ToastContainer autoClose={5000} />
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
                                    <td colSpan='3'>{rows.length} Transfer</td>
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
                                {rows}
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
                    <form onSubmit={(e) => { this.sendMoney(e, this.state.amount, this.state.reciever, this.state.name, this.state.narration) }}>
                        <MDBModalHeader toggle={this.toggleModal(14)} className='modal-head'>Send Money</MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow md="12">
                                <MDBAlert color="warning" className={this.state.errTrans}>
                                    <span className='close' style={{ fontSize: '12px', color: 'warning' }} onClick={() => this.setState({ errErr: 'd-none' })}>x</span>
                                    <strong style={{ fontSize: '12px', color: 'red' }}>{this.errText}</strong>
                                </MDBAlert>
                                <MDBCol md="12" style={{ textAlign: 'left' }}>
                                    <label className='reg-input'>How much do you want to send?</label>
                                    <input
                                        type="currency"
                                        className="form-control"
                                        placeholder='Amount'

                                        onChange={this.handleAmount.bind(this)}
                                        value={this.state.amount}
                                    />

                                </MDBCol>
                                <MDBCol md="12" style={{ textAlign: 'left' }}>
                                    <label className='reg-input'>Send to?</label><br />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Email, Phone No or Account no'

                                        onChange={this.handleReciever.bind(this)}
                                        value={this.state.reciever}
                                    />
                                </MDBCol>
                                <MDBCol md="12" style={{ textAlign: 'left' }}>
                                    <label className='reg-input'>Reciever's Name</label><br />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"

                                        onChange={this.handleName.bind(this)}
                                        value={this.state.name}
                                    />
                                </MDBCol>
                                <MDBCol className='text-center'>
                                    <u>Or select existing beneficiary</u>
                                </MDBCol>
                                <MDBCol md="12" style={{ textAlign: 'left' }}>
                                    <label className='reg-input'>Narration</label><br />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Description'
                                        onChange={this.handleNarration.bind(this)}
                                        value={this.state.narration}
                                    />
                                </MDBCol>
                            </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="white" onClick={this.toggleModal(14)}>Cancel</MDBBtn>
                            <MDBBtn color="primary" type='submit'>Send Money</MDBBtn>
                        </MDBModalFooter>
                    </form>
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


const PersonRow = (props) => {
    return (
        <tr>
            <td><span className="dot circledot">OS</span></td>
            <td>{props.data.firstName} {props.data.lastName}</td>
            <td>{props.data.amount}</td>
            <td colSpan='2'>{props.data.narration}</td>
            <td style={{ textAlign: 'right' }}> {props.data.transactionDate}</td>
        </tr>
    );
}

export default Account;