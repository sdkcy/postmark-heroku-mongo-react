/**
 * DemoApp
 * index.js
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "../middlewares/logger";
import {rootReducer} from "../reducers";
import {appMode} from "../constants/app";

const middlewares = [thunk];

if (process.env.mode === appMode.DEVELOPMENT) {
    middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
