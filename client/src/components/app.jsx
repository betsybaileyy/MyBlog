import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './navbar';
import Blogs from './blogs';
import BlogPage from './blogpage';
import About from './about';
import Archive from './archive';
import Post from './post';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import ViewIndPost from './viewIndPost';
import AdminPortal from './adminPortal';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <AuthButton />
                    <Switch>
                        <Route exact path="/" component={Blogs} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute exact path="/editblog/:id" component={BlogPage} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/posts" component={Archive} />
                        <Route exact path="/blog/:id" component={ViewIndPost} />
                        <PrivateRoute exact path="/adminportal" component={AdminPortal} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;