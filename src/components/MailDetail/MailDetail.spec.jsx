/**
 * DemoApp
 * MailDetail.spec.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import * as shallow from "react-test-renderer/shallow";
import MailDetail from "./MailDetail";

it("MailDetail renders without crashing", () => {
    shallow.createRenderer().render(<MailDetail/>);
});
