import * as actionTypes from './actionsTypes';

export const setTranslateTo = language => {
    return {
        type: actionTypes.SET_TRANSLATE_TO,
        language: language
    }
}

export const setTranslateFrom = language => {
    return {
        type: actionTypes.SET_TRANSLATE_FROM,
        language: language
    }
}

export const setWords = words => {
    return {
        type: actionTypes.SET_WORDS,
        words: words
    }
}

export const setTranslation = translation => {
    return {
        type: actionTypes.SET_TRANSLATION,
        translation: translation
    }
}

export const setTranslations = translation => {
    return {
        type: actionTypes.SET_TRANSLATIONS,
        translation: translation
    }
}

export const setAllData = data => {
    return {
        type: actionTypes.SET_ALL_DATA,
        data: data
    }
}