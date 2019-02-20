import * as actionTypes from './actionsTypes';
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

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.SET_WORDS:
            return {
                ...state,
                words: action.words
            };

        case actionTypes.SET_TRANSLATIONS:

            const translation = [...state.translation];
            translation.push(action.translation);
            
            return {
                ...state,
                translation: translation
            };


        case actionTypes.SET_TRANSLATION:

            return {
                ...state,
                translation: [ action.translation ]
            };

        case actionTypes.SET_ALL_DATA:
            return {
                ...state,
                type: action.data
            };

        case actionTypes.SET_TRANSLATE_TO:
            return {
                ...state,
                translateTo: action.language
            };

        case actionTypes.SET_TRANSLATE_FROM:
            return {
                ...state,
                translateFrom: action.language
            };

        default:
            return state;
    }
};

export default reducer;