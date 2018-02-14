import React, { Component, Fragment } from 'react';
import Post from './post';

class Posts extends Component {
    render() {
        return (
            <Fragment>
                {this.props.posts.map((p, index) => {
                    return (
                        <Post loggedIn={this.props.loggedIn} key={index} post={p} />
                    );
                })}
            </Fragment>
        );
    }
}

export default Posts;
