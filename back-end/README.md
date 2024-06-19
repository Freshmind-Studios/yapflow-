# YapFlow: Back-end Service Documentation

The back-end service of YapFlow is a REST API that provides essential information and includes a WebSocket for real-time actions.

## Setup

To get started, follow these steps:

1. Create a `.env` file with the following variables:
  - `PORT`: Specifies the server port for hosting.
  - `SECRET`: Used for generating hashes and performing operations that require a secret.
  - `MONGODB_URI`: Specifies the URI of your MongoDB.

2. Install the dependencies by running `npm i` assuming you have `npm` installed.

3. Start the server using the command `npm start`.

## REST API

This API is based on session identification. Once you are logged in and the session cookie exists, you can request any endpoint without credentials, just forward the cookie.

### Endpoints

#### AUTH

This route is providing service for the authentication methods.

##### `POST /api/auth`

If the user has a saved session in cookies, the body is not required, and the information will be provided automatically. However, if not, you need to provide this information. If the credentials match any user, that user's information will be returned. If the tag does not exist, a new user will be registered with the provided password.

**Request Body**
```json
{
  "tag": "tag",
  "password": "password",
  "register": boolean // either true or false based off the users decision, by default it is false
}
```

**Response Body**
```json
{
  "sessionId": "sessionId",
  "userId": "userId"
}
```

##### `DELETE /api/auth`

Clears the cookies to disable automatic authentication. No body is required since you need to be logged in to make this work.

#### USERS

This route is forwarding information about users.

##### `GET /api/users/{userId}`

This endpoint returns user information.

**Response Body**

```json
{
  "tag": "tag",
  "name": "name",
  "status": "status",
  "picture": "picture" // base64 format
}
```

#### ME

Route, that has endpoints with the session user preferences and information.

##### `GET /api/me/friends`

Based on the credentials, returns a list of user IDs in the friends list.

**Response Body**

```json
["userId"]
```
##### `GET /api/me/chats`

Based on the current state, returns a list of all your chats.

**Response Body**

```json
["yappieId"]
```

##### `GET /api/communities`

Returns a list of communities the session user is in.

**Response Body**

```json
["yapId"]
```

#### CHATS

This route is forwarding the yappies data.

##### `GET /api/chats/{yappieId}`

Returns information about a specific chat.

**Response Body**

```json
{
  "users": ["userId", "userId"],  // the members of this yappie (mostly the session user and the friend)
  "messages": []
}
```

#### COMMUNITIES

This route is forwarding the yaps data.

##### `GET /api/communities/{yapId}`

Returns information about a specific community.

**Response Body**

```json
{
  "users": ["userId", "userId"], // the members of the yap
  "zones": [], // different zones including canvas
  "picture": "picture", // picture of the yap in base64 format
  "name": "name" // name of the yap
}
```

## WEBSOCKET

The WS is on the path `/ws` and adds support for real-time changes from the server and other functionalities.

### CONNECTION

Connection is done by connecting to the following path:

**`/ws/session/{sessionId}`**

The messages are in the following JSON format:

```json
{
  "function": "func_name",
  ... // based off the function, you will add additional info if necessary
}
```