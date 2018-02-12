import React, { Component } from 'react';
import Blogs from './blogs';
import Posts from './posts';

class Archive extends Blogs {
    render() {
        return (
            <div className="container">
                <Posts posts={this.state.blogs} />
            </div>
        );
    }
}

export default Archive;
