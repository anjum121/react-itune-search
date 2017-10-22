import axios from 'axios';

export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const URL = 'https://itunes.apple.com/search';
export const SEARCH = 'SEARCH';

let ifLocalStorage = localStorage.getItem("Favourite") ? JSON.parse(localStorage.getItem("Favourite")) : [];

const initialState = {
    data: [],
    favourite: ifLocalStorage,
    value: ''

};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                data: action.payload
            };

        case ADD_TO_FAVOURITE:

            localStorage.setItem('Favourite', JSON.stringify(([...state.favourite, action.payload])));
            return {
                ...state,
                favourite: [...state.favourite, action.payload]
            };

        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourite: state.favourite.filter(item => action.payload !== item)
            };

        default:
            return state
    }
}


export const search = (item) => {
    return dispatch => {
        return axios.get(URL + item)
            .then(res => {
                return dispatch({
                    type: SEARCH,
                    payload: res.data.results
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }
};


export const addToFavourite = (item) => {
    return dispatch => {
        return setTimeout(() => {
            dispatch({
                type: ADD_TO_FAVOURITE,
                payload: item,
            })
        }, 0)
    }
};

export const removeFavourite = (item) => {
    return dispatch => {
        return setTimeout(() => {
            let obj = JSON.parse(localStorage.getItem('Favourite'));
            let final = obj.filter((id) => {
                return id.trackId !== item.trackId;
            });

            localStorage.setItem('Favourite', JSON.stringify(final));

            dispatch({
                type: REMOVE_FAVOURITE,
                payload: item,

            })
        }, 0)
    }
};
