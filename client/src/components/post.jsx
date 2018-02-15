import React from 'react';
import { Link } from 'react-router-dom';
import * as userServices from '../services/user';

function renderEditLink(post, loggedIn) {
    if (userServices.isLoggedIn()) {
        return <Link to={`/editblog/${post.id}`} className="lead">Edit</Link>;
    }
}

const Post = (props) => {
    // console.log(props);
    let post = props.post;
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <div className="details-container">
                <h3>{post.title}</h3>
                <p className="card-text">
                    {post.content}
                </p>
                    {renderEditLink(post, props.loggedIn)}
                    <br></br>
                    <Link to={`/blog/${post.id}`} className="lead">See Details</Link>
                </div>
               
            </div>
        </div>
    );
};

export default Post;
