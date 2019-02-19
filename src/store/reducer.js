import * as actionTypes from './actions';
import { combineReducers } from 'redux';

const initialState = {
    words: '',
    translation: [],
    type: [],
    language: [
        { id: 1, language: 'aceh' },
        { id: 2, language: 'indonesia' }
    ],
    translateFrom: 'aceh',
    translateTo: 'indonesia'
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.SET_DATA:
            return {

            };

        case actionTypes.SET_TRANSLATION:
            return {

            };

        case actionTypes.SET_ALL_DATA:
            return {

            };

        default:
            return state;
    }
};

export default combineReducers({
    mainReducer: mainReducer,
});