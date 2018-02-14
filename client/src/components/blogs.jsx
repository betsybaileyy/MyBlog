import React, { Component } from 'react';
import BlogForm from './blogform';
import Posts from './posts';
import * as blogService from '../services/blogs';
import * as userService from '../services/user';

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: [],
            loggedIn: false
        };
    }

    componentDidMount() {
        this.getBlogs();
        userService.checkLogin()
            .then((loggedIn) => {
                this.setState({ loggedIn });
            });
    }

    getBlogs() {
        blogService.all()
            .then((posts) => {
                this.setState({
                    blogs: posts
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addBlog(post) {
        fetch('/api/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.getBlogs();
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container">
                <Posts loggedIn={this.state.loggedIn} posts={this.state.blogs} />
            </div>
        );
    }
}

export default Blogs;
