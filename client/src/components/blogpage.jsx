
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import BlogForm from './blogform';

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

    getPost() { //posts vs blogs here?
        fetch(`/api/blogs/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            }).then((post) => {
                this.setState({ post });
            });
    };

    delete() {
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    updatePost(post) {
        this.setState({ post });

        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
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
                <BlogForm action='Update' postBlog={(post) => { this.updatePost(post); }} />
            </React.Fragment>
        )
    }
}

export default BlogPage;
