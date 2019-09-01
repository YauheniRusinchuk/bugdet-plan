import {combineReducers} from 'redux';
import auth from './auth'
import projects from './project'
import detail from './detail'

export default combineReducers({
    auth,
    projects,
    detail,
})
