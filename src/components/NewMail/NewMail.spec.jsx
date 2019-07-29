/**
 * DemoApp
 * NewMail.spec.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import NewMail from "./NewMail";
import * as shallow from "react-test-renderer/shallow";

it("NewMail renders without crashing", () => {
    shallow.createRenderer().render(<NewMail/>);
});
