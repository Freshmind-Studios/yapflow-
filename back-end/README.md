# YapFlow: back-end service documentation

The back-end service of YapFlow is a REST API that provides some key information. To add up to that, it also includes a WebSocket for real-time actions.

## Setup

To start, create a `.env` file with the following variables:

`PORT` : tells the server at what server port should it be hosted

`SECRET` : used for generating hashes and different operations that require a secret

`MONGODB_URI` : the URI of your MongoDB

Assuming you have `npm` installed, run `npm i` to install all the dependencies. Once you feel like running the server, run `npm start`.

## Endpoints

`POST /auth`

**request body**

```json
{
  "tag": "tag",
  "password": "password"
}
```

**response body**

```json
{
  "sessionId": "sessionId",
  "userId": "userId"
}
```

`body.tag` is the username entered

`body.password` is the password entered

If the user requesting has a saved session in cookies, the body isn't required and the info will be provided automatically. However, if not then you need to provide this info. If the credentails will match any user, that users info will be returned. If the tag does not exist, then it will register one with that password.

`DELETE /auth`

Will clear the cookies so that the user is not being automatically authenticated. No body is required, since you need to be logged in to make this work.

`GET /users`

**response body**

```json
["playerId"]
```

Based off the credentials will return a list of userIds in the user's friends list.

`GET /users/{userId}`

**response body**

```json
{
  "tag": "tag",
  "name": "name",
  "status": "status",
  "picture": "picture"
}
```

This endpoint returns user info. The tag, name and status are strings, picture is a PNG in base64 format.

`GET /chats`

**response body**

```json
["yappieId"]
```

Based off your current state, it will return a list of all of your chats.

`GET /chats/{yappieId}`

`GET /communities`

`GET /communities/{yapId}`
