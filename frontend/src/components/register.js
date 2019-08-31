import React from 'react'

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
            console.log("THIS IS EMAIL : ", email)
            console.log("THIS IS PASSWORD : ", password)
        }
    }

    render(){
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


export default Register;
