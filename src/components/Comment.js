import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

class Comment extends Component {
    render() {
        const { comment, userImg } = this.props;

        return (
            <div className="comment-container">
                <p className="comment-text">
                    {comment.comment}
                </p>
                <div className="comment-footer">
                    <img className="comment-img" alt={comment.user} src={userImg} />
                    <div className="comment-wrapper">
                        <p className="comment-name">{comment.user}</p>
                        <p className="comment-email">{comment.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.object,
    userImg: PropTypes.string,
}

export default Comment