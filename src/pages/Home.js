import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchArticlesData } from '../actions/Home'
import Article from '../components/Article'
import './Home.css';

class Home extends Component {

    componentDidMount() {
        const { onFetchArticles } = this.props;
        onFetchArticles();
    }

    handleArticleClick = (articleId) => {
        const { history } = this.props;
        history.push(`/article/${articleId}`);
    }
    render() {
        const { articles } = this.props;

        if (!articles.length > 0) {
            return (
                <div className="loading-wrapper">
                    <p className="loading-text">
                        Loading...
                    </p>
                </div>
            )
        }

        return (
            <div>
                <div className="home-header">
                    <h2 className="header-mainText">
                        Articles Hub
                    </h2>
                    <p className="header-subText">
                        One stop destination for the best articles
                    </p>

                </div>
                <div className="home-content">
                    {
                        articles.map(article => (
                            <Article
                                key={article.user.name}
                                data={article}
                                onArticleClick={this.handleArticleClick}
                            />
                        ))
                    }
                </div>

            </div>
        )
    }
}

Home.propTypes = {
    onFetchArticles: PropTypes.func.isRequired,
    articles: PropTypes.array,
    history: PropTypes.object,
}
const mapStateToProps = ({ home }) => {
    return {
        articles: home.articles
    }
};

const mapDispatchToProps = dispatch => ({
    onFetchArticles: () => dispatch(fetchArticlesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);