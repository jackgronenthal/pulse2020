import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Register from './Register';
import ParticleWrapper from './ParticleWrapper';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router basename="/pulse2020">
                    <div class="mainbody">
                        <ParticleWrapper />
                        <Route exact path="/" component={Register} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;
