/**
 * DemoApp
 * index.js
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import {axiosBackend} from "../../constants/axios";
import {emailActionTypes} from "../actionTypes";
import {emailSender} from "../../config/config.json";

export function getInbox() {
    return ((dispatch) => {
        return axiosBackend.get("getInbox")
            .then((response) => {
                return dispatch({
                    type: emailActionTypes.GET_INBOX,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log("Error", error);
            });
    });
}

export function getSentBox() {
    return ((dispatch) => {
        return axiosBackend.get("getSentBox")
            .then((response) => {
                return dispatch({
                    type: emailActionTypes.GET_SENT_BOX,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log("Error", error);
            });
    });
}

export function sendEmail(email) {
    email.From = emailSender;

    return ((dispatch) => {
        return axiosBackend.post("send", email)
            .then(() => {
                return dispatch({
                    type: emailActionTypes.SEND_EMAIL,
                    payload: email
                });
            })
            .catch((error) => {
                console.log("Error", error);
            });
    });
}
