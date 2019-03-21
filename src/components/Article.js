import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRandomDate } from '../utils/'
import userImg from '../assets/smiley-cyrus.jpg';
import './Article.css';

class Article extends Component {


    handleArticleClick = () => {
        const {
            onArticleClick,
            data: { id }
        } = this.props;

        onArticleClick && onArticleClick(id);
    }
    render() {
        const { data, data: { user } } = this.props;

        return (
            <div className="article-container">
                <div className="article-innerContainer">
                    <div className="article-userWrapper">
                        <img className="user-image" alt={user.name} src={userImg} />
                        <div className="user-nameContainer">
                            <a href={`/user/${data.id}`} className="user-name">
                                {user.name}
                            </a>
                            <span className="date">
                                {getRandomDate()}
                            </span>
                        </div>
                    </div>
                    <div className="article-contentWrapper" onClick={this.handleArticleClick}>
                        <h4 className="article-heading">{data.heading}</h4>
                        <p className="article-description">{data.description}</p>
                    </div>
                </div>

            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.object.isRequired,
    onArticleClick: PropTypes.func,
}

export default Article