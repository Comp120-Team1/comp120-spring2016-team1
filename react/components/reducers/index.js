import incidents from './incidents';
import filters from './filters';
import {combineReducers} from 'redux';


export default combineReducers ({
    incidents,
    filters
})
