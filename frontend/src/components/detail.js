import React from 'react'
import {connect} from 'react-redux'
import {getProjectDetail} from '../actions/project'


class Detail extends React.Component {


    componentDidMount() {
        const {id} = this.props.location.state
        this.props.getProjectDetail(id)
        console.log('REQUEST')
    }


    render(){
        const {detail} = this.props
        console.log('DETAIL :', detail)
        const body = detail ? (
            <div className='detail_project'>
                <p>{detail.detail.name}</p>
                <span>{detail.detail.budget}руб</span>
            </div>

        ): (<p>NOT</p>)
        return(
            <div className='detail_container'>
                {body}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    detail: state.detail,
})



export default connect(mapStateToProps, {getProjectDetail})(Detail);
