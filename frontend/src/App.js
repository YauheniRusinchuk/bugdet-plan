import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './components/root'
import {loadUser} from './actions/auth'
import {connect} from 'react-redux'


class App extends React.Component {

    componentDidMount() {
        this.props.loadUser();
    }

    render(){
        return (
            <div>
                <Router>
                    <Root />
                </Router>
            </div>
        );
    }
}

export default connect(null, {loadUser})(App);
