/**
 * DemoApp
 * index.spec.js
 * Created by Sıdıka ÇAY on 2019-06-30
 */

const chai = require("chai");
const expect = chai.expect;

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import {getInbox, getSentBox, sendEmail} from "./index";
import {emailActionTypes} from "../actionTypes";
import config from "../../config/config.json";
import {axiosBackend, Status} from "../../constants/axios";

const mockStore = configureMockStore([thunk]);

describe("Email action creator tests", () => {
    const API_URL = config.backend.baseURL[process.env.mode];
    const mock = new MockAdapter(axiosBackend);
    const store = mockStore({inbox: [], sentBox: []});

    afterEach(() => {
        mock.reset();
        store.clearActions();
    });

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

    it("When the all inbox email data is gotten, " +
        "It should dispatch GET_INBOX action with payload of the all inbox email data", () => {
        mock.onGet(API_URL + "getInbox").reply(() => {
            return [Status.OK, emailBox];
        });

        return store.dispatch(getInbox()).then(() => {
            const dispatchedAction = store.getActions()[0];
            expect(dispatchedAction.type).to.equal(emailActionTypes.GET_INBOX);
            expect(dispatchedAction.payload).to.equal(emailBox);
        });
    });

    it("When the all sent box email data is gotten, " +
        "It should dispatch GET_SENT_BOX action with payload of the all sent box email data", () => {
        mock.onGet(API_URL + "getSentBox").reply(() => {
            return [Status.OK, emailBox];
        });

        return store.dispatch(getSentBox()).then(() => {
            const dispatchedAction = store.getActions()[0];
            expect(dispatchedAction.type).to.equal(emailActionTypes.GET_SENT_BOX);
            expect(dispatchedAction.payload).to.equal(emailBox);
        });
    });

    it("When the email data is sent, " +
        "It should dispatch SEND_EMAIL action with payload of the saved email data", () => {
        const testEmail = {
            "From": "test.sender@test.com",
            "To": "test.receiver@test.com",
            "Subject": "test subject",
            "TextBody": "test body"
        };

        mock.onPost(API_URL + "send").reply(() => {
            return [Status.OK, "id"];
        });

        return store.dispatch(sendEmail(testEmail)).then(() => {
            const dispatchedAction = store.getActions()[0];
            expect(dispatchedAction.type).to.equal(emailActionTypes.SEND_EMAIL);
            expect(dispatchedAction.payload).to.equal(testEmail);
        });
    });
});
