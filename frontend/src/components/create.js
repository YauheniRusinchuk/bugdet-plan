import React from 'react'
import {connect} from 'react-redux'
import {addProject} from '../actions/project'
import {Redirect} from 'react-router-dom'


class Create extends React.Component {

    state = {
        name: "",
        budget: "",
        redirect: false,
    }


    onChangeHandle = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    onSubmitHandle = (e) => {
        e.preventDefault();
        const {name, budget} = this.state;
        if(name && budget) {
            const project = {
                name,
                budget: Number(budget)
            }
            this.props.addProject(project);
            this.setState({redirect: true})
        }
    }


    render(){
        if(this.state.redirect) {
            return <Redirect to='/' />
        }
        return (
            <div className='create_container'>
                <p>СОЗДАЙЕМ ПРОЕКТ</p>
                <form onSubmit={this.onSubmitHandle}>
                    <label>НАЗВАНИЕ ПРОЕКТА</label>
                    <input
                        name='name'
                        value={this.state.name}
                        onChange={this.onChangeHandle}
                        type='text' placeholder="Назовите проект" />
                    <label>БЮДЖЕТ</label>
                    <input
                        name='budget'
                        value={this.state.budget}
                        onChange={this.onChangeHandle}
                        type='nubmer' placeholder="500 ..." />
                    <button>СОЗДАТЬ</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addProject})(Create);
