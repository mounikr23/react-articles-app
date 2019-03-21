import { combineReducers } from 'redux';
import home from './home';
import article from './articleDetails';
import user from './userDetails';

export default combineReducers({
    home,
    article,
    user
});
