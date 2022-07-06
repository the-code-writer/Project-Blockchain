import React from 'react';
import './LoginForm.css';
import 'font-awesome/css/font-awesome.min.css';
import {reactLocalStorage} from 'reactjs-localstorage';

const axios = require('axios');

class LoginForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            username: '',
            password: '',
            rememberMe: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {

        let localRememberMe = reactLocalStorage.get("rememberMe", false, true);

        if (localRememberMe === "false"){

            localRememberMe =  false;

        }else{

            localRememberMe =  true;

        }

        let localLoggedIn = reactLocalStorage.get("loggedIn", false, true);

        if (localLoggedIn === "false"){

            localLoggedIn =  false;

        }

        if (localLoggedIn){

            let localUserObject = reactLocalStorage.getObject("userObject");

            if (localUserObject){

                this.signInUser(localUserObject);

            }

        }

        setTimeout(() => {

            this.setState({
                    rememberMe : localRememberMe,
                    loggedIn : localLoggedIn,
                }
            );

            //console.warn("LOCAL_REMEMBER_ME", localRememberMe, this.state);

        },10);

    }

    handleRememberMeClick(element) {

        const self = this;

        const shouldRemember = element.checked;

        const credentialsAuth = {
            username: this.state.username,
            password: this.state.password,
            rememberMe: shouldRemember
        }

        this.setState({rememberMe : shouldRemember});

        setTimeout(function () {

            console.warn("SHOULD_REMEMBER_ME_OBJ", shouldRemember, credentialsAuth, self.state);

            reactLocalStorage.set("rememberMe", shouldRemember);

            reactLocalStorage.setObject('loginCredentials', credentialsAuth);

        },10)

    }

    handleChange(event) {

        switch (event.target.getAttribute('data-id')) {

            case "username" : {

                this.setState(
                    {username: event.target.value}
                    );
                break;

            }

            case "password" : {

                this.setState(
                    {password: event.target.value}
                    );
                break;

            }

            default:{
                console.warn("Unknown id");
            }

        }

    }

    handleSubmit(event) {
        //console.log('A form was submitted: ', this.state);
        this.loginAction( this.state );
        event.preventDefault();
    }

    loginAction( data ){

        let self = this;

        if (JSON.stringify(this.state) !== JSON.stringify(data)){
            console.warn("INVALID_DATA:", data);
            return;
        }

        axios.defaults.headers.post['Content-Type'] ='application/json; charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        // Make a request for a user with a given ID

        //https://communicator.hyperefficient2.net/index.php/login/do_tenant_login

        axios.post('https://communicator.hyperefficient2.net/index.php/display/auth', data)
            .then(function (response) {
                // handle success
                self.validateLogin(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                //console.log(1234567890);
            });

    }

    validateLogin(response) {

        const self = this;

        switch (response.status) {

            case 200 : {

                const data = response.data;

                if (data.status === "ERROR") {

                    alert(data.message);

                } else {

                    if (self.state.rememberMe){

                        //console.warn(":: self.state.rememberMe ::", self.state.rememberMe);

                        reactLocalStorage.setObject("userObject", data.payload);

                    }

                    self.signInUser(data.payload);

                }

                break;

            }

            default: {

                break;

            }

        }

    }

    signInUser( payload ){

        //console.log("SIGNED IN USER", payload);

        if ("tenant_id" in payload){

            this.props.action(payload);

        }

        //console.log("SIGNED IN ID", payload.tenant_id);

        if ("tenant" in payload){

            const tenant = payload.tenant;

            //console.log("SIGNED IN TENANT", tenant);

            if ("settings" in tenant){

                let tenantSettings = tenant.settings;

                if (typeof tenantSettings === "string"){

                    tenantSettings = JSON.parse(tenantSettings);

                    reactLocalStorage.setObject("tenantSettings", tenantSettings);

                    //console.warn("tenantSettings::", tenantSettings);

                }

            }

        }

    }

    render() {

        return (

            <div className="text-center">

                <form  onSubmit={this.handleSubmit} className="form-signin" style={{ height: "10vh", paddingTop: "100px"}}>
                    <img alt="" src="https://communicator.hyperefficient2.net/assets/favicon/apple-icon-114x114.png" />
                    <h4 className="h4 mt-3 mb-3 font-weight-normal">Please sign in</h4>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="text" data-id="username" value={this.state.username} onChange={this.handleChange} className="form-control mb-4" placeholder="Device Login" required  />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" data-id="password" value={this.state.password} onChange={this.handleChange} className="form-control mb-4" placeholder="Password" required />
                    <div className="checkbox mb-3 text-align-left">
                        <label>
                            <input type="checkbox" value="remember-me"
                                   onChange={(e) => this.handleRememberMeClick(e.target)}
                                   checked={this.state.rememberMe ? true : false}
                            /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block mb-3 mt-3 w-100" type="submit" style={{width: "100% !important"}}>Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2021. Supplyzone Communicator.<br /> All Rights Reserved.</p>
                </form>

            </div>

        );

    }

}

export default LoginForm;
