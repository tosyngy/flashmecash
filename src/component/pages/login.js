import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBMedia, MDBAlert } from 'mdbreact';
import '../css/form.css';
import logo from "../assests/images/logo-placeholder.png"
import { Link } from "react-router-dom";
import history from './includes/history';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            username: '',
            password: '',
            errUsr: 'd-none',
            errPwd: 'd-none',
            errErr: 'd-none',
        };
    }
    handleUsername(e) {
        this.setState({ username: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    login(e, secret, clientID) {
        e.preventDefault();
        if (clientID.length === 0) {
            this.setState({ errErr: 'd-none' })
            this.setState({ errPwd: 'd-none' })
            this.setState({ errUsr: 'd-block'})
            return 0;
        }else if (secret.length === 0) {
            this.setState({ errErr: 'd-none' })
            this.setState({ errPwd: 'd-block'})
            this.setState({ errUsr: 'd-none' })
            return 0;
        }
        let url = 'https://staging.seerbitapigateway.com/FCMB_BACK/rest/api/oauth';
        let param = {
            clientID,
            secret
        };
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // 'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJjbGllbnRpZCI6InRlc3QiLCJzZWNyZXQiOiJ0ZXN0IiwiZXhwIjoxNTQ3NjM5ODQwLCJpc3MiOiJDZW50cmljIn0.lr_AgEfXCdM8clJM65Xl-5Ik49SHRI09zNsBV076QT-bUyPn29sCZhcf1SbrIlICFeEqkIrchfm80Nm2j2EdXw"
            },
            body: JSON.stringify(param),
        }
        fetch(url, options)
            .then((response) => response.json())
            .then(result => {
                if (result.response !== undefined) {
                    this.setState({ errErr: 'd-block' })
                    this.setState({ errPwd: 'd-none' })
                    this.setState({ errUsr: 'd-none' })
                }else{
                    history.push('/main');
                    window.location.reload();
                }
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
                                <form onSubmit={(e) => { this.login(e, this.state.username, this.state.password) }}>
                                    <p className="h4 center mb-4">
                                        <MDBMedia center href="#">
                                            <MDBMedia object center src={logo} alt={"Placeholder"} className='logo-img' />
                                        </MDBMedia>
                                    </p>
                                    <MDBAlert color="warning" className={this.state.errErr} dismiss>
                                        <strong className='text-sm'>Invalid Username and Password</strong>
                                    </MDBAlert>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Phone Number'

                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleUsername.bind(this)}
                                        value={this.state.username}
                                    />
                                    <MDBAlert color="warning" className={this.state.errUsr} style={{ fontSize: '10px !important' }} dismiss>
                                        <span className='text-sm'>Phone Number is required</span>
                                    </MDBAlert>
                                    <br />
                                    <input
                                        type="password"
                                        className="form-control actionColor"
                                        placeholder='Password'
                                        onChange={this.handlePassword.bind(this)}
                                        value={this.state.password}
                                    />
                                    <MDBAlert color="warning" className={this.state.errPwd} style={{ fontSize: '10px !important' }} dismiss>
                                        <span className='text-sm'>Password is required</span>
                                    </MDBAlert>
                                    <br />
                                    <div className="text-center">
                                        <MDBBtn color="purple" type="submit" className='largeInput gold-color myblue'>Login to your account</MDBBtn>
                                    </div>
                                    <div className="form-group text-center ">
                                        <a href="/password-reset">Forgot your Password?</a>
                                    </div>
                                    <div className="clearfix-50">
                                        <div className="form-group">
                                            <Link className="btn btn-block signup" to={`/registration-option`}>Create an Account</Link>
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