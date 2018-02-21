
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import BlogForm from './blogform';
import * as blogService from '../services/blogs';

class BlogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                id: 0,
                title: '',
                content: ''
            }
        };
    }

    componentDidMount() {
        this.getPost();
    }

    getPost() { 
        blogService.one(this.props.match.params.id)
            .then((post) => {
                this.setState({ post });
            });
    };

    delete() {
        blogService.destroy(this.props.match.params.id)
            .then(() => {
                this.props.history.push('/');
            }).catch((err) => {
                console.log(err);
            });
    }

    updatePost(post) {
        this.setState({ post });
        blogService.update(this.props.match.params.id, post)
           .then(() => {
                console.log('update success')
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Post post={this.state.post} />
                </div>
                <div>
                    <button onClick={() => { this.delete() }}>Delete</button>
                </div>
                <BlogForm action='Update' post={this.state.post} postBlog={(post) => { this.updatePost(post); }} />
            </React.Fragment>
        )
    }
}

export default BlogPage;
