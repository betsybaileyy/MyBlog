import React, { Component } from 'react';

class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    handleTitleChange(title) {
        this.setState({ title });
    }

    handleContentChange(content) {
        this.setState({ content });
    }

    render() {
        return (
            <form className="card p-3 m-1">
                <label
                    htmlFor="text-input"
                    className="d-block m-2">Create a Post:
                </label>
                <input
                    value={this.state.title}
                    onChange={(event) => { this.handleTitleChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Title"
                />
                <textarea 
                    value={this.state.content}
                    onChange={(event) => { this.handleContentChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Post Content"
                />
                <button
                    onClick={() => { this.props.postBlog(this.state) }}
                    type="button"
                    className="btn btn-primary m-2">Post!
                </button>
            </form>
        );
    };
}

export default BlogForm;
