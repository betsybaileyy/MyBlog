import React, { Component } from 'react';
import * as blogService from '../services/blogs';

class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            tags: []
        };
    }

    getPost() {
        let postProp = this.props.post;
        let state = this.state;

        if (!postProp) {
            return state;
        }

        if (!state.title && !state.content) {
            state.title = postProp.title;
            state.content = postProp.content;

            if (Array.isArray(postProp.tags)) {
                state.tags = postProp.tags;
            }
        }

        return state;
    }

    handleTitleChange(title) {
        this.setState({ title });
    }

    handleContentChange(content) {
        this.setState({ content });
    }
    handleTagChange(tagStr) {
        // 'JS, HTML'

        let tagStrArray = tagStr.split(', ');
        let tags = tagStrArray.map((tag) => {
            return { name: tag };
        });

        this.setState({ tags });
    }
    render() {
        let post = this.getPost();
        // [{ name: 'JS' }, { name: 'HTML' }]
        let tags = post.tags;

        // iterate through tag
        // accumulate the name properties
        // join the names together, separated by ', '

        // ['JS', 'HTML']
        let tagStrArray = tags.map((tag) => {
            return tag.name;
        });

        let tagStr = tagStrArray.join(', ');

        return (
            <form className="card p-3 m-1">
                <label
                    htmlFor="text-input"
                    className="d-block m-2">{this.props.action} Post:
                </label>
                <input
                    value={post.title}
                    onChange={(event) => { this.handleTitleChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Title"
                />
                <textarea
                    value={post.content}
                    onChange={(event) => { this.handleContentChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Post Content"
                />
                <input
                    value={tagStr}
                    onChange={(event) => { this.handleTagChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Tags"
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
