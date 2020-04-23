import React, { Component } from 'react'
import { register } from '../UserFunctions'
import { header } from '../Style/Header'
import Nav from '../Login/Nav'
import backgroundImage from './Images/background.jpg'
import FormBoos from 'react-bootstrap/Form';
import { RegisterForm } from '../Style/RegisterForm'
import AnimatedMulti from './Selector'

const Header = header(backgroundImage)
const Form = RegisterForm(FormBoos)

class Register extends Component {
    constructor() {
        super()
        this.state = {
            Age: '',
            Gender: '',
            Occupation: '',
            Email: '',
            Preferences: null,
            Password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
      }
    onSubmit(e) {
        e.preventDefault()
        const newUser = {
            Age: this.state.Age,
            Gender: this.state.Gender,
            Occupation: this.state.Occupation,
            Email: this.state.Email,
            Preferences: this.state.Preferences,
            Password: this.state.Password,
            Preferences: this.state.Preferences
        }
        console.log(newUser)
        register(newUser).then(res => {
            if (res !== 500) {
                if (!res.status) {
                    this.props.history.push('/login')
                } else {
                    this.setState({ error: res.data.Message });
                    this.setState({ loading: false });
                }
            } else {
                this.setState({ error: "Server is not reachable" });
                this.setState({ loading: false });
            }

        })
    }

    render() {
        return (
            <Header>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <Form noValidate onSubmit={this.onSubmit}>
                                <h1 style={{ color: 'white', fontSize: "32px", margin: "0 0 28px 0" }}>Register</h1>
                                <div className="form-group">
                                    <AnimatedMulti onChange={this.handleChange} value={this.state.Preferences}/>
                                </div>
                                <div className="form-group">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text"
                                            className="form-control"
                                            name="Age"
                                            placeholder="Enter Age"
                                            value={this.state.Age}
                                            onChange={this.onChange}
                                            pattern="[0-9]*"
                                        />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text"
                                            className="form-control"
                                            name="Gender"
                                            placeholder="Enter Gender"
                                            value={this.state.Gender}
                                            onChange={this.onChange}
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        name="Occupation"
                                        placeholder="Enter Occupation"
                                        value={this.state.Occupation}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="email"
                                        className="form-control"
                                        name="Email"
                                        placeholder="Enter email"
                                        value={this.state.Email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className="form-control"
                                        name="Password"
                                        placeholder="Enter Password"
                                        value={this.state.Password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                    Register
                            </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Header>
        )
    }
}
export default Register