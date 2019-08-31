import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render(){
        return(
            <div className='home_container'>
                <Link className='create_btn' to='/create'>СОЗДАТЬ НОВЫЙ ПРОЕКТ</Link>
                <button className='logout_btn'>ВЫЙТИ</button>
                <div className='lists_project'>
                    <p>У ВАС ПОКА НЕТ ПРОЕКТОВ, СОЗДАЙТЕ НОВЫЙ</p>
                </div>
            </div>
        );
    }
}

export default Home;
