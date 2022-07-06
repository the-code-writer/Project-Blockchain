import React from 'react';

import LoginForm from './LoginForm.js';
import Dashboard from './components/Dashboard.js';
import './App.css';
import {reactLocalStorage} from 'reactjs-localstorage';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true,
            userData: null
        };

        // Bind the this context to the handler function
        this.handlerLogin = this.handlerLogin.bind(this);
        this.handlerLogout = this.handlerLogout.bind(this);

    }

    componentDidMount() {

        let self = this;

        let localUserObject = reactLocalStorage.getObject("userObject");

        if (localUserObject && "tenant_id" in localUserObject ){

            this.handlerLogin(localUserObject);

            setTimeout(function () {

                if (!self.state.loggedIn){

                    window.location.reload();

                    this.setState({
                        loggedIn: true,
                        userData: localUserObject
                    });

                }

            },10000);

        }

    }

    // This method will be sent to the child component
    handlerLogin( data ) {

        this.setState({
            loggedIn: true,
            userData: data
        });

        //console.warn("HANDLE LOGIN", this.state);

    }

    // This method will be sent to the child component
    handlerLogout( ) {

        const self = this;

        if (window.confirm("Do you really want to logout?")) {


            reactLocalStorage.remove("rememberMe");

            reactLocalStorage.remove('loginCredentials');

            reactLocalStorage.remove('userObject');

            setTimeout(function(){

                self.setState({
                    loggedIn: false,
                    userData: null
                });

                console.warn("HANDLE LOGOUT", this.state);


            },1000)

        }


    }

    render() {

        return (

            !this.state.loggedIn ? <LoginForm action={this.handlerLogin} /> : <Dashboard actionLogout={this.handlerLogout} userData={this.state.userData} />

        );

    }

}

export default App;
