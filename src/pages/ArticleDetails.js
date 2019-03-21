import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRandomDate } from '../utils/';
import _ from 'lodash';
import Comment from '../components/Comment';
import { fetchArticleDetails } from '../actions/ArticleDetails';
import './ArticleDetails.css';
import userImg from '../assets/smiley-cyrus.jpg';

class ArticleDetails extends Component {
    componentDidMount() {
        const {
            match: {
                params: { id }
            },
            onFetchArticleDetails,
        } = this.props;

        onFetchArticleDetails(id);

    }

    render() {
        const { articleDetails } = this.props;
        const { user, comments } = articleDetails;

        if (!_.size(user) > 0) {
            return (
                <div className="loading-wrapper">
                    <p className="loading-text">
                        Loading...
                    </p>
                </div>
            )
        }
        return (
            <div className="article-container">
                <div className="articleDetails-header">
                    <div className="articleDetails-innerContent">
                        <a className="backButton" href='/'>Homepage</a>
                        <h2 className="articleDetails-mainText">
                            {articleDetails.heading}
                        </h2>
                        <div className="article-userWrapper">
                            <img className="user-image" alt={user.fullname} src={userImg} />
                            <div className="user-nameContainer">
                                <a href={`/user/${articleDetails.id}`} className="articleDetailsUser-name">
                                    {user.fullname}
                                </a>
                                <span className="articleDetails-date">
                                    {getRandomDate()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="articleDetails-content">
                    <p className="articleDetails-description">
                        {articleDetails.description}
                    </p>
                    <div className="articleDetails-commentsWrapper">
                        <p className="articleDetails-commentsHeading">Comments:</p>
                        {
                            comments.map(comment => (
                                <Comment comment={comment} userImg={userImg} />
                            ))
                        }
                    </div>
                </div>
            </div >
        )
    }
}

ArticleDetails.propTypes = {
    match: PropTypes.object,
    articleDetails: PropTypes.object,
    onFetchArticleDetails: PropTypes.func,
}

const mapStateToProps = ({ article }) => {
    return {
        articleDetails: article.articleDetails
    }
};

const mapDispatchToProps = dispatch => ({
    onFetchArticleDetails: (id) => dispatch(fetchArticleDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);