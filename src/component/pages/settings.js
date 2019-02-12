import React from "react";
import {
    MDBRow, MDBCol, MDBBtn,
    MDBTable, MDBTableBody
}
    from 'mdbreact';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

class Settings extends React.Component {
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
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }}>Profile</Tab>
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }}>Password</Tab>
                    </TabList>

                    <TabPanel>
                        <MDBCol md="9" className='d-flex flex-column' >
                            <MDBRow md="12">
                                <MDBCol md="6" style={{ textAlign: 'left' }}>
                                    <label className='reg-input light'>First name</label><br />
                                    <input
                                        type="type"
                                        id="defaultFormRegisterFirstNameEx"
                                        className="form-control"
                                        placeholder='First name'
                                    />
                                </MDBCol>
                                <MDBCol md="6" style={{ textAlign: 'left' }}>
                                    <label className='reg-input light'>Last name</label><br />
                                    <input
                                        type="type"
                                        id="defaultFormRegisterLastNameEx"
                                        className="form-control"
                                        placeholder='Last name'
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow md="12">
                                <MDBCol md="6" style={{ textAlign: 'left' }}>
                                    <label className='reg-input light'>Gender</label><br />
                                    <input
                                        type="type"
                                        id="defaultFormRegisterGenderEx"
                                        className="form-control"
                                        placeholder='Gender'
                                    />
                                </MDBCol>
                                <MDBCol md="6" style={{ textAlign: 'left' }}>
                                    <label className='reg-input light'>Date of Birth</label><br />
                                    <input
                                        type="date"
                                        id="defaultFormRegisterDOBEx"
                                        className="form-control"
                                        placeholder='**/**/****'
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow md="12">
                                <MDBCol md="6" style={{ textAlign: 'left' }}>
                                    <label className='reg-input light'>Phone</label><br />
                                    <input
                                        type="tel"
                                        id="defaultFormRegisterPhoneEx"
                                        className="form-control"
                                        placeholder='Mobile no.'
                                    />
                                </MDBCol>
                                <MDBCol md="6" style={{ textAlign: 'left' }}>
                                    <label className='reg-input light'>Email Address(optional)</label><br />
                                    <input
                                        type="email"
                                        id="defaultFormRegisterEmailEx"
                                        className="form-control"
                                        placeholder='Email Address'
                                    />
                                </MDBCol>
                            </MDBRow>
                            <p></p>
                            <MDBRow md="12">
                                <MDBCol>
                                    <MDBBtn flat size="sm" style={{float:'left'}} className='add-page'>Update</MDBBtn>
                                </MDBCol>

                            </MDBRow>
                        </MDBCol>
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

export default Settings;