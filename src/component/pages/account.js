import React from "react";
import {
    MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon,
    MDBTable, MDBTableBody, MDBCardText, MDBCardTitle
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
                                    <MDBBtn flat size="sm" className='add-page'><MDBIcon icon="plus" className="mr-2" />Add new account</MDBBtn>
                                </MDBRow>
                                <MDBRow className='d-flex flex-row-reverse'>
                                    <MDBBtn flat size="sm" className='add-page'><MDBIcon icon="plus" className="mr-2" />Add new wallet</MDBBtn>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <Line data={this.state.dataLine} options={{ responsive: true }} />
                        </MDBRow>
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
                                    <td colSpan='2'>5 Accounts</td>
                                    <td colSpan='1'> <MDBBtn flat size="sm" className='add-page'><MDBIcon icon="plus" className="mr-2" />Button</MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
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

export default Account;