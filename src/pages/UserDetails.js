import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchUserDetails } from '../actions/UserDetails';
import './UserDetails.css';
import userImg from '../assets/smiley-cyrus.jpg';

class UserDetails extends Component {
    componentDidMount() {
        const {
            match: {
                params: { id }
            },
            onFetchUserDetails,
        } = this.props;

        onFetchUserDetails(id);
    }

    render() {
        const { userDetails } = this.props;

        if (!_.size(userDetails) > 0) {
            return (
                <div className="loading-wrapper">
                    <p className="loading-text">
                        Loading...
                    </p>
                </div>
            )
        }

        return (
            <div className="userDetails-container">
                <div className="userDetails-header">
                    <div className="userDetails-innerContent">
                        <a className="userDetails-backButton" href='/'>Homepage</a>
                        <div className="userDetails-wrapper">
                            <img className="userDetails-image" alt={userDetails.fullname} src={userImg} />
                            <h2 className="userDetails-mainText">
                                {userDetails.fullname}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="userDetails-content">
                    <div className="userDetails-details">
                        <p className="userDetails-detailsTitle">UserName:</p>
                        <p className="userDetails-detailsTitle value">
                            {userDetails.name}
                        </p>
                    </div>
                    <div className="userDetails-details">
                        <p className="userDetails-detailsTitle">Company:</p>
                        <p className="userDetails-detailsTitle value">
                            {userDetails.company}
                        </p>
                    </div>
                    <div className="userDetails-details">
                        <p className="userDetails-detailsTitle">Email:</p>
                        <p className="userDetails-detailsTitle value">
                            {userDetails.email}
                        </p>
                    </div>
                    <div className="userDetails-details">
                        <p className="userDetails-detailsTitle">Website:</p>
                        <p className="userDetails-detailsTitle value">
                            {userDetails.website}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

UserDetails.propTypes = {
    match: PropTypes.object,
    userDetails: PropTypes.object,
    onFetchUserDetails: PropTypes.func,
}

const mapStateToProps = ({ user }) => {
    return {
        userDetails: user.userDetails
    }
};

const mapDispatchToProps = dispatch => ({
    onFetchUserDetails: (id) => dispatch(fetchUserDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);