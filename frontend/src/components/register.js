import React from 'react'
import {connect} from 'react-redux'
import {register} from '../actions/auth'
import {Redirect} from 'react-router-dom'

class Register extends React.Component {


    state = {
        email: "",
        password: "",
        password2: ""
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password, password2} = this.state;
        if (!password2) {
            return false
        }
        if (password !== password2) {
            return false
        }
        if(email && password) {
            this.props.register({email, password});
        }
    }

    render(){
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        return(
            <div className='register_container'>
                <p>РЕГИСТРАЦИЯ</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        type='email'  placeholder="Почта ..."/>
                    <input
                        name='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        type='password' placeholder="Пароль ..."/>
                    <input
                        name='password2'
                        onChange={this.handleChange}
                        value={this.state.password2}
                        type='password' placeholder="Повторите пароль ..."/>
                    <button>РЕГИСТРАЦИЯ</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});



export default connect(mapStateToProps, {register})(Register);
