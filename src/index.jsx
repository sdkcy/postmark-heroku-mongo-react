/**
 * DemoApp
 * index.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import {Provider} from "react-redux";
import store from "./store";
import Main from "./containers/Main";

let App = () => {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
};

App = hot(module)(App);

ReactDOM.render(<App/>, document.getElementById("root"));
