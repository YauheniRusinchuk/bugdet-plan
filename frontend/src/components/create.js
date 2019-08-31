import React from 'react'


class Create extends React.Component {
    render(){
        return (
            <div className='create_container'>
                <p>СОЗДАЙЕМ ПРОЕКТ</p>
                <form>
                    <label>НАЗВАНИЕ ПРОЕКТА</label>
                    <input type='text' placeholder="Назовите проект" />
                    <label>БЮДЖЕТ</label>
                    <input type='text' placeholder="Введите бюджет" />
                    <button>СОЗДАТЬ</button>
                </form>
            </div>
        )
    }
}

export default Create;
