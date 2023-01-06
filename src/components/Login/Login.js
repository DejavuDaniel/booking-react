import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInName: '',
            signInpassword: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ signInName: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInpassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.signInName,
                password: this.state.signInpassword
            })
        })
        this.props.onRouteChange('home');
            // .then(response => response.json())
            // .then(user => {
            //     if (user) {
            //         console.log('working')
            //         this.props.loadUser(user)
            //         this.props.onRouteChange('home');
            //     }
            //     console.log('fail')
            // })
    }

    render() {
        return (
            <div style={{ paddingTop: "200px" }}>
                <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{ width: "300px" }}>
                    <main className="pa4 ">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0" style={{ textAlign: 'center' }}>Login</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" >ID:</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" onChange={this.onNameChange} />
                                </div>
                                <div className="mv3">
                                    <label className=" db fw6 lh-copy f6 " >Password:</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={this.onPasswordChange} />
                                </div>
                            </fieldset>
                            <div className="" style={{ textAlign: 'center' }}>
                                <input
                                    onClick={this.onSubmitSignIn}
                                    className="b ph3 pv2 input-reset ba b-black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Login"
                                />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        )
    }
}

export default Login;