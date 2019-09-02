import React from 'react'
import {connect} from 'react-redux'
import {getProjectDetail} from '../actions/project'
import {addExpense} from '../actions/project'


class Detail extends React.Component {


    state = {
        title: "",
        amount: "",
    }


    componentDidMount() {
        const {id} = this.props.location.state
        this.props.getProjectDetail(id)
        console.log('REQUEST')
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const {id} = this.props.location.state
        const {title, amount} = this.state;
        if(title && amount) {
            const data = {
                title,
                project: id,
                amount: Number(amount),
            }
            this.props.addExpense(data)
            this.props.getProjectDetail(id)
            this.setState({title: "", amount: ""})
        }
    }





    render(){
        const {detail, expenses} = this.props
        const body = detail ? (
            <div className='detail_project'>
                <p>{detail.detail.name}</p>
                <span>{detail.detail.budget}руб</span>
            </div>

        ): (<p>NOT</p>)

        const expenses_body = expenses ? (
            expenses.map(expense => {
                return (
                    <div key={expense.id} className='item_expense'>
                        <p>{expense.title}</p>
                        <span>-{expense.amount}руб</span>
                    </div>
                )
            })
        ): ""

        return(
            <div className='detail_container'>
                {body}
                {expenses_body}

                <div className='create_new_expense'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            name='title'
                            value={this.state.title}
                            onChange={this.handleChange}
                            type='text' placeholder="На что потратили ? " />
                        <input
                            name='amount'
                            value={this.state.amount}
                            onChange={this.handleChange}
                            type='text' placeholder="Сколько 20, 30, 50 ?" />
                        <button>ДОБАВИТЬ</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    detail: state.detail,
    expenses: state.detail.detail.expenses,
})



export default connect(mapStateToProps, {getProjectDetail, addExpense})(Detail);
