import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    // console.log(props);
    let post = props.post;
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <div>
                    <Link to={`/blog/${post.id}`} className="btn btn-primary">See Details</Link>
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
