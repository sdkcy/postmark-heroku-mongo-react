/**
 * DemoApp
 * index.js
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import Axios from "axios";
import {backend} from "../../config/config.json";

const path = backend.baseURL[process.env.mode];

export const axiosBackend = Axios.create({
    baseURL: path,
    timeout: 5000,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

export const Status = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    NOT_MODIFIED: 304,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
};
