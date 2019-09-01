import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import Login from './login'
import Register from './register'
import Create from './create'
import Detail from './detail'
import PrivateRoute from './privateRoute'

class Root extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/create' component={Create} />
                    <Route path='/detail' component={Detail}/>
                </Switch>
            </div>
        );
    }
}

export default Root;
