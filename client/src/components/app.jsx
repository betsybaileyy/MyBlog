import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './navbar';
import Blogs from './blogs';
import BlogPage from './blogpage';
import About from './about';
import Archive from './archive';
import Post from './post';

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
                        <Route exact path="/posts" component={Archive} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;