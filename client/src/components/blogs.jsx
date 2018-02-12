import React, { Component } from 'react';
import BlogForm from './blogform';
import Posts from './posts';

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
        fetch('/api/blogs/')
            .then((response) => {
                return response.json();
            }).then((posts) => { 
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
                <BlogForm postBlog={(post) => { this.addBlog(post); }} />
                <Posts posts={this.state.blogs} />
            </div>
        );
    }
}

export default Blogs;
