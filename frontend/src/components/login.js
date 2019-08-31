import React from 'react'
import {Link} from 'react-router-dom'


class Login extends React.Component {

    state = {
        email: "",
        password: ""
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        if(email && password) {
            console.log("THIS IS EMAIL : ", email)
            console.log("THIS IS PASSWORD : ", password)
        }
    }


    render(){
        return(
            <div className='login_container'>
                <p>ВОЙТИ</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        name='email'
                        value={this.state.email}
                        type='email' placeholder="Почта ..." />
                    <input
                        onChange={this.handleChange}
                        name='password'
                        value={this.state.password}
                        type='password' placeholder="Пароль ..." />
                    <button>ВОЙТИ</button>
                </form>
                <Link className='btn_login' to='/register'>регистрация</Link>
            </div>
        );
    }
}


export default Login;
