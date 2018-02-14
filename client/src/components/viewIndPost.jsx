
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import BlogForm from './blogform';

class ViewIndPost extends Component {
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
    render() {
        return (
            <React.Fragment>
                <div>
                    <Post post={this.state.post} />
                </div>
            </React.Fragment>
        )
    }
}

export default ViewIndPost;
