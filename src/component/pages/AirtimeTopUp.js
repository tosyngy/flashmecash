import React from "react";
import {
    MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon,
    MDBTable, MDBTableBody, MDBCardText, MDBCardTitle, MDBTableHead
}
    from 'mdbreact';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

class AirtimeTopUp extends React.Component {
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
                        <Tab style={{ color: '#472864', 'font-size': '16px', 'font-weight': '900' }} >Airtime Top Up</Tab>
                    </TabList>

                    <TabPanel>
                        <MDBTable fluid>
                            <MDBTableBody>
                                <tr>
                                    <td colSpan='2' className='text-bold'>3 Top-ups</td>
                                    <td colSpan='3' className='text-bold'>
                                        <MDBBtn flat size="sm" className='add-page'>Buy Airtime</MDBBtn>
                                    </td>
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
                </Tabs>
            </MDBRow>
        );
    }
};

export default AirtimeTopUp;