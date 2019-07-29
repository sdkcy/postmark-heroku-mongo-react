/**
 * DemoApp
 * NavigationBar.spec.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import NavigationBar from "./NavigationBar";
import * as shallow from "react-test-renderer/shallow";

it("NavigationBar renders without crashing", () => {
    shallow.createRenderer().render(<NavigationBar/>);
});
