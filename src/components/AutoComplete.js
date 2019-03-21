import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import './AutoComplete.css'

class Autocomplete extends Component {

    handleChange = e => {
        const { onChange } = this.props;

        onChange && onChange(e);
    }

    handleKeyDown = e => {
        const { onKeyDown } = this.props;

        onKeyDown && onKeyDown(e);
    }

    handleClick = (e) => {
        const { onClick } = this.props;

        onClick && onClick(e);
    }

    render() {
        const {
            activeSuggestion,
            filteredSuggestions,
            showSuggestions,
            userInput
        } = this.props;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <li className={className} key={suggestion} onClick={this.handleClick}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="no-suggestions">
                        <em>No suggestions, you're on your own!</em>
                    </div>
                );
            }
        }

        return (
            <Fragment>
                <input
                    type="text"
                    placeholder="Search user"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </Fragment>
        );
    }
}
Autocomplete.propTypes = {
    activeSuggestion: PropTypes.number,
    filteredSuggestions: PropTypes.array,
    showSuggestions: PropTypes.bool,
    userInput: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    suggestions: PropTypes.instanceOf(Array)
}

export default Autocomplete;
