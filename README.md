# Postmark Heroku app
It is a client and backend app for Postmark API to send and receive email.
It can be upload to Heroku as a live application.


## Tech stack
* **express** for using RESTful Web Service and routing
* **node-cache** for caching data
* **mongodb** for database
* **eslint** for linting
* **mocha** and chai for testing
* **sketch** for designing
* **react** for frontend SPA
* **redux** for managing states
* **redux-thunk** for managing asynchronous actions
* **axios** for making request to a REST API
* **react-test-renderer** for making render tests
* **axios-mock-adapter** and **redux-mock-store** for testing redux
* **mongoose** as mongodb driver
* **react-bootstrap** as ui library
* **postmark** as postmark client

## Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install postmark app.
```bash
npm install
```
or
```bash
yarn install
```


## Usage
For development:
```bash
yarn start
```

For testing:
```bash
yarn test
```
## Configuration(Optional)
The configurations can be changed by editing config.json file.
#### For frontend:
```bash
src/config/config.json
```
```json
{
  "backend": {
    "baseURL": {
      "development": "http://localhost:8000/api/email/",
      "test": "http://localhost:8000/api/email/",
      "production": "Your production backend URL"
    }
  },
  "emailSender": "Your sender email"
}
```
#### For backend:
```bash
backend/config/config.json
```
```json
{
  "api": "/api",
  "database": {
    "path": {
      "production": "mongodb://localhost:27017/",
      "development": "mongodb://localhost:27017/",
      "test": "mongodb://localhost:27017/"
    },
    "name": {
      "production": "prod_postmark",
      "development": "dev_postmark",
      "test": "test_postmark"
    },
    "options": {
      "useNewUrlParser": true,
      "useCreateIndex": true
    }
  },
  "postmarkapp": {
    "key": "Your Postmark API key",
    "senderEmail": "Your sende email",
    "webHookKey": "Your webhook secret"
  },
  "server": {
    "port": 8000
  },
  "cache": {
    "ttl": 6000
  }
}
```

## Author
**Sıdıka Türkan Akkoyun Çay** - [sidikacay@yahoo.com](mailto:sidikaakkoyun@gmail.com)
