/**
 * DemoApp
 * index.js
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import {emailActionTypes} from "../../actions/actionTypes";

export const initialState = {
    inbox: [],
    sentBox: []
};

export default function emailReducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case emailActionTypes.GET_INBOX:
            newState = Object.assign({}, state, {inbox: action.payload});
            break;
        case emailActionTypes.GET_SENT_BOX:
            newState = Object.assign({}, state, {sentBox: action.payload});
            break;
        case emailActionTypes.SEND_EMAIL:
            newState = Object.assign({}, state, {sentBox: [action.payload].concat(state.sentBox)});
            break;
        default :
            break;
    }

    return newState;
}
