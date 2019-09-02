import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getProjects} from '../actions/project'
import {logout} from '../actions/auth'
import {deleteProject} from '../actions/project'

class Home extends React.Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render(){
        const {projects} = this.props.projects;
        console.log(projects)
        const body = projects ? (
            projects.map(project => {
                return(
                    <div className='project_item' key={project.id}>
                        <button onClick={this.props.deleteProject.bind(this, project.id)} className='btn_delete_project'>удалить</button>
                        <Link to={{pathname: '/detail', state: {id: project.id}}}>{project.name}</Link>
                        <span>{project.budget}руб</span>
                    </div>
                )
            })
        ): (<p>У ВАС ПОКА НЕТ ПРОЕКТОВ, СОЗДАЙТЕ НОВЫЙ</p>)

        return(
            <div className='home_container'>
                <Link className='create_btn' to='/create'>СОЗДАТЬ НОВЫЙ ПРОЕКТ</Link>
                <button onClick={this.props.logout} className='logout_btn'>ВЫЙТИ</button>
                <div className='lists_project'>
                    {body}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    projects: state.projects,
})


export default connect(mapStateToProps,{getProjects, logout, deleteProject})(Home);
