import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBMedia } from 'mdbreact';
import '../css/form.css';
import logo from "../assests/images/logo-placeholder.png"
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            email: '',
            password: ''
        };
    }
    handleUsername(e) {
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    login = async (secret, clientID) => {
        let url = 'https://staging.seerbitapigateway.com/FCMB_BACK/rest/api/oauth';
        let param = {
            clientID,
            secret
        };
        const options = {
            method: 'POST',
            // mode: "no-cors", // no-cors, cors, *same-origin
            headers: {
                'content-type': 'application/json',
                'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJjbGllbnRpZCI6InRlc3QiLCJzZWNyZXQiOiJ0ZXN0IiwiZXhwIjoxNTQ3NjM5ODQwLCJpc3MiOiJDZW50cmljIn0.lr_AgEfXCdM8clJM65Xl-5Ik49SHRI09zNsBV076QT-bUyPn29sCZhcf1SbrIlICFeEqkIrchfm80Nm2j2EdXw"
            },
            body: JSON.stringify(param),
        }
        fetch(url, options)
            // .then((response) => response.json())
            .then(result => {
                console.log(result)
                return result;
            })
            .catch(err => {
                throw err;
            });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="4"></MDBCol>
                            <MDBCol md="4">
                                <form>
                                    <p className="h4 center mb-4">
                                        <MDBMedia center href="#">
                                            <MDBMedia object center src={logo} alt={"Placeholder"} className='logo-img' />
                                        </MDBMedia>
                                    </p>
                                    <input
                                        type="email"
                                        id="defaultFormLoginEmailEx"
                                        className="form-control"
                                        placeholder='Phone Number'
                                        onChange={this.handleUsername.bind(this)}
                                        value={this.state.username}
                                    />
                                    <br />
                                    <input
                                        type="password"
                                        id="defaultFormLoginPasswordEx"
                                        className="form-control actionColor"
                                        placeholder='Password'
                                        onChange={this.handlePassword.bind(this)}
                                        value={this.state.password}
                                    />
                                    <br />
                                    <div className="text-center">
                                        <MDBBtn color="purple" type="button" className='largeInput gold-color myblue' onClick={()=>this.login(this.state.username, this.state.password)}>Login to your account</MDBBtn>
                                    </div>
                                    <div className="form-group text-center ">
                                        <a href="/">Forgot your Password?</a>
                                    </div>
                                    <div className="clearfix-50">
                                        <div className="form-group">
                                            <Link className="btn btn-block signup" to={`/main`}>Create an Account</Link>
                                        </div>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </header>
            </div>
        );
    }
};

export default Login;