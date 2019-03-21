import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchArticlesData } from '../actions/Home'
import Article from '../components/Article'
import './Home.css';
import Autocomplete from '../components/AutoComplete';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        };
    }
    componentDidMount() {
        const { onFetchArticles } = this.props;
        onFetchArticles();
    }

    onChange = e => {
        const { usersList } = this.props;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = usersList.filter(
            user =>
                user.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = e => {
        const { articles } = this.props;
        const selectedObj = articles.filter(article => article.user.name === e.currentTarget.innerText)[0];
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        }, () => {
            this.props.history.push(`/user/${selectedObj.id}`)
        });
    };

    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }

        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }

        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    handleArticleClick = (articleId) => {
        const { history } = this.props;
        history.push(`/article/${articleId}`);
    }

    render() {
        const { articles } = this.props;
        const {
            userInput,
            showSuggestions,
            activeSuggestion,
            filteredSuggestions,
        } = this.state;

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
                <div className="home-autoComplete">
                    <Autocomplete
                        onChange={this.onChange}
                        onClick={this.onClick}
                        activeSuggestion={activeSuggestion}
                        filteredSuggestions={filteredSuggestions}
                        showSuggestions={showSuggestions}
                        userInput={userInput}
                        onKeyDown={this.onKeyDown}
                    />
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
    usersList: PropTypes.array,
    history: PropTypes.object,
}
const mapStateToProps = ({ home }) => {
    return {
        articles: home.articles,
        usersList: home.usersList
    }
};

const mapDispatchToProps = dispatch => ({
    onFetchArticles: () => dispatch(fetchArticlesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);