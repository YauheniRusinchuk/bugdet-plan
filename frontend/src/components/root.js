import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import Login from './login'
import Register from './register'

class Root extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </Switch>
            </div>
        );
    }
}

export default Root;
