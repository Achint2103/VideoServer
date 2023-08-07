## Video Server with MERN Stack (React.js, Node.js, Express.js, MongoDB)

## Start

**1. Install Dependencies**

The project contains two basic folders: `client` and `server`. Client is the front end of the application and is written in React.js. Server is the back end of the application and is written in Node.js. To run this project, download it to your computer and open it with a code editor:

![Screenshot 2023-08-08 004239](https://github.com/Achint2103/VideoServer/assets/87437738/3571fd0f-73e9-4716-9ac5-5d88f58aceac)



For both main files in the project folder, you have to go to the terminal and install the NPM dependencies. To do this:

- `cd client` and then `npm install`

![Screenshot 2023-08-08 005600](https://github.com/Achint2103/VideoServer/assets/87437738/84f842c1-43c5-42de-a198-3dd95c698782)


- `cd server` and then `npm install`

![Screenshot 2023-08-08 005718](https://github.com/Achint2103/VideoServer/assets/87437738/4baf2cbc-ac58-430e-a2d7-9c328cb14d18)


**2. Config .env**

Open the `.env` file in the env folder and firstly give it into `MONGO_URL` information. MONGO_URL gets database connect link. Like that:

`MONGO_URL = mydatabaseconnectlinkexample@mongodb`

You should enter other information in the `.env` file for token and password reset operations. You can find this information at the end of this document under the name "env file". But it's not must for now.

**3. Run**

Now, you already installed the NPM dependencies. Now you can run the client and server.

**Run Client**: Client will run at `localhost:3000`. To run the client, use the commands:

- `cd client` and then `npm run start`

![client](https://user-images.githubusercontent.com/101933251/201528501-28771b7e-18f0-4d71-bd7e-d658ceb6e47f.jpg)

![Screenshot 2023-08-08 010436](https://github.com/Achint2103/VideoServer/assets/87437738/db6fc041-d58c-478f-8d91-b1d8e49276ce)


**Run Server**: Server will run at `localhost:5000`. To run the server, use the commands:

- `cd server` and then `npm run start`

![server](https://user-images.githubusercontent.com/101933251/202870980-aa0960ec-6921-4729-a5af-eea189b612d9.jpg)

## Project Informations

The project has two main folders named client and server. Client is React.js. Server is Node.js and Express.js. Server side has got Express server. Express server is loaded in `server` variable:

**Client**

React.js is used here. It has folders named Pages, components and redux. The Components folder holds the components in this application like Topbar. Pages, on the other hand, hold pages such as Home page, video page. Components are rendered in certain parts of the pages. React Router DOM is used for page redirection. Redux Toolkit is used for state management. In components and pages, requests are made to the api addresses written on the server side. If the request results are positive, the incoming results are printed on the screen.

**Server**

Node.js, Express.js and MongoDB is used here. Database schema models were made in the models folder. API endpoints are written in the routes folder. Controller functions for routes are written in the controllers folder. Middlewares for routes are written in the Middlewares folder. In addition to these, there are additional folders such as helpers.

**Database Models**

User, Video, Comment

**Authentication - Authorization**

This project uses JSON Web Token for authentication and authorization. You will receive a token when you log in. That token is sent to the user's browser and stored as a cookie. When you want to reach certain routes, the middleware takes the token from the cookie and decrypts it. If the token is valid, it allows you to use the controller valid for that route.

Note: Your information resolved in the token will be kept in the `req.user` object.

**Routes**

    + `localhost:5000/api/auth/signup`: register (http post method)
    + `/api/auth/signin`: login  (http post method)

    + `localhost:5000/api/users/find/:id`: get a user (http get method)
    + `localhost:5000/api/users/:id`: update an user (http put method)
    + `localhost:5000/api/users/:id`: delete an user (http delete method)
    + `localhost:5000/api/users/sub/:id`: subscribe an user (http put method)
    + `localhost:5000/api/users/unsub/:id`: unsubscribe an user (http put method)
    + `localhost:5000/api/users/like/:videoId`: like a video (http put method)
    + `localhost:5000/api/users/dislike/:videoId`: dislike a video (http put method)
    + `localhost:5000/api/users/uploadProfileImage`: upload profile image (http post method)

    + `localhost:5000/api/videos/find/:id`: get a video (http get method)
    + `localhost:5000/api/videos`: add a video (http post method)
    + `localhost:5000/api/videos/:id`: update a video (http put method)
    + `localhost:5000/api/videos/:id`: delete a video (http delete method)
    + `localhost:5000/api/videos/view/:id`: add view to a video (http put method)
    + `localhost:5000/api/videos/find/byuser/:id`: get a video by user (http get method)
    + `localhost:5000/api/videos/random`: get random videos (http get method)
    + `localhost:5000/api/videos/smallrandom`: get small random videos (http get method)
    + `localhost:5000/api/videos/trend`: get trend videos (http get method)
    + `localhost:5000/api/videos/sub`: get sub videos (http get method)
    + `localhost:5000/api/videos/tags?tags=js`: get tag videos (http get method)
    + `localhost:5000/api/videos/search?q=breaking+bad`: get query videos (http get method)

    + `localhost:5000/api/comments/videoId`: get comment by video id (http get method)
    + `localhost:5000/api/comments/`: add comment by video id (http post method)
    + `localhost:5000/api/comments/:id`: delete comment by video id (http delete method)

**.env file**

![env jpg](https://user-images.githubusercontent.com/101933251/202870628-da034e3d-611d-4830-82fe-f7dc79755719.JPG)

## Snapshots

- **Sign Up Page**:

![sign up](https://github.com/Achint2103/VideoServer/assets/87437738/2a06d737-46a2-45a8-8601-336ebb85a9a1)


- **Sign In Page**

![sign in](https://github.com/Achint2103/VideoServer/assets/87437738/9a842819-bcbb-4679-8d9e-e318204fcf21)


- **Home Page**:

![home](https://github.com/Achint2103/VideoServer/assets/87437738/d6ff75be-3b54-44f6-9d6d-dbe8f9c03008)


- **Home Page as Logged**:

![home auth](https://github.com/Achint2103/VideoServer/assets/87437738/bb445dca-0309-4a78-8060-f154e0b3550c)



- **Video Upload Page**:

![upload file](https://github.com/Achint2103/VideoServer/assets/87437738/8e70cbd4-c066-443b-9a2c-f1cf9dd536a9)


- **Video Page**:

![video](https://github.com/Achint2103/VideoServer/assets/87437738/04a493b6-1bf3-4177-a036-481340efa3d0)

- **Channel Page**:

![channel page](https://github.com/Achint2103/VideoServer/assets/87437738/ae7f8d41-d2aa-4e04-8be1-7a1138406f3c)


- **Channel Page as Logged**:

![auth channel page](https://user-images.githubusercontent.com/101933251/202870651-85b75236-ae89-417c-b5bf-865ca5a6bc82.JPG)
