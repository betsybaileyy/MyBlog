import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    // console.log(props);
    let post = props.post;
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <div className="details-container">
                    <Link to={`/blog/${post.id}`} className="lead">See Details</Link>
                </div>
                <h3>{post.title}</h3>
                <p className="card-text">
                    {post.content}
                </p>
            </div>
        </div>
    );
};

export default Post;
