import { combineReducers } from 'redux';
import home from './home';
import article from './articleDetails';

export default combineReducers({
    home,
    article
});
