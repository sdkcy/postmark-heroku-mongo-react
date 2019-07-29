/**
 * DemoApp
 * index.js
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import {combineReducers} from "redux";
import emailReducer from "./email";

export const rootReducer = combineReducers({
    email: emailReducer
});
 
