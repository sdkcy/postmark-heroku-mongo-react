/**
 * DemoApp
 * Main.spec.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import Main from "./Main";
import store from "../store";
import {Provider} from "react-redux";
import * as shallow from "react-test-renderer/shallow";

it("Main renders without crashing", () => {
    shallow.createRenderer().render(<Provider store={store}><Main/></Provider>);
});
