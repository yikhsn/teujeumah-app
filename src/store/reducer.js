import * as actionTypes from './actions';

const initialState = {
    words: '',
    translations: [],
    type: []
}

const reducer = ( state = initialState, action) => {
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

export default reducer;