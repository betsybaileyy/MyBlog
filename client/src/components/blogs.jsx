import React, { Component } from 'react';
import BlogForm from './blogform';
import Posts from './posts';
import * as blogService from '../services/blogs';

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        this.getBlogs();
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
                <BlogForm action='Create' postBlog={(post) => { this.addBlog(post); }} />
                <Posts posts={this.state.blogs} />
            </div>
        );
    }
}

export default Blogs;
