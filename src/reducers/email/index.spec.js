/**
 * DemoApp
 * index.spec.js
 * Created by Sıdıka ÇAY on 2019-06-30
 */

const chai = require("chai");
const expect = chai.expect;

import {emailActionTypes} from "../../actions/actionTypes";
import emailReducer, {initialState} from "./index";

describe("Email reducer test", () => {
    const emailBox = [
        {
            "From": "test.sender@test.com",
            "To": "test.receiver@test.com",
            "Subject": "test subject",
            "TextBody": "test body"
        },
        {
            "From": "test.sender@test.com",
            "To": "test.receiver@test.com",
            "Subject": "test subject",
            "TextBody": "test body"
        }
    ];

    it("When get inbox action is sent to reducer, " +
        "It should set inbox data to the state", () => {
        const testAction = {
            type: emailActionTypes.GET_INBOX,
            payload: emailBox
        };
        const expected = emailReducer(initialState, testAction);
        const real = {
            ...initialState,
            inbox: emailBox
        };
        expect(expected).to.deep.equal(real);
    });

    it("When get sent box action is sent to reducer, " +
        "It should set sent box data to the state", () => {
        const testAction = {
            type: emailActionTypes.GET_SENT_BOX,
            payload: emailBox
        };
        const expected = emailReducer(initialState, testAction);
        const real = {
            ...initialState,
            sentBox: emailBox
        };
        expect(expected).to.deep.equal(real);
    });

    it("When send email action is sent to reducer, " +
        "It should set the send email data to the state", () => {
        const testEmail = {
            "From": "test.sender@test.com",
            "To": "test.receiver@test.com",
            "Subject": "test subject",
            "TextBody": "test body"
        };

        const testAction = {
            type: emailActionTypes.SEND_EMAIL,
            payload: testEmail
        };
        const expected = emailReducer(initialState, testAction);
        const real = {
            ...initialState,
            sentBox: [testEmail]
        };
        expect(expected).to.deep.equal(real);
    });
});
