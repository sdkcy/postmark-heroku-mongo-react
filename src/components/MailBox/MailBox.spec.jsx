/**
 * DemoApp
 * MailBox.spec.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import * as shallow from "react-test-renderer/shallow";

import MailBox from "./MailBox";

it("MailBox renders without crashing", () => {
    shallow.createRenderer().render(<MailBox/>);
});
