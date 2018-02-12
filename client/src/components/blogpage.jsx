
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import BlogForm from './blogForm';

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

    // handleInputChange(text) {
    //     this.setState({ text });
    // };

    delete() {
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }
    // updateChirp(text) {
    //     this.setState({ text });
    //     console.log(text);
    //     fetch(`/api/chirps/${this.props.match.params.id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             text
    //         })
    //     }).then(() => {
    //         this.props.history.push('/');
    //         console.log('update success')
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }


    render() {
        return (
            <React.Fragment>
                <div>
                    <Post post={this.state.post} />
                </div>
                <div>
                    <button onClick={() => { this.delete() }}>Delete</button>
                </div>
                {/* <div>
                    <input
                        onChange={(event) => { this.handleInputChange(event.target.value) }}
                        className="form-control w-70 m-2 d-inline"
                        placeholder="what would you like to change?"
                    />
                </div>
                <button
                    onClick={() => { this.updateChirp(this.state.text) }}
                    type="button"
                    className="btn btn-primary m-2">Update
                </button> */} 
            </React.Fragment>
        )

    }
}

export default BlogPage;
