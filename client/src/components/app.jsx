import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './navbar';
import Blogs from './blogs';
import BlogPage from './blogpage';
import About from './about';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Blogs} />
                        <Route exact path="/blog/:id" component={BlogPage} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;