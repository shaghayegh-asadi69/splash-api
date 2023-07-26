const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8092;

app.get("/", (request, response) => {
  response.status(200).json("Ho,give me all your money");
});
app.get("/photos", async (request, response) => {
  const API = `https://api.unsplash.com/search/photos/?client_id=${process.env.ACCESS_KEY}&query=sam`;
  const res = await axios.get(API);
  const photos = res.data.results.map((photo) => {
    return {
      id: photo.id,
      img_url: photo.urls.regular,
      original_image: photo.links.self,
      photographer: photo.user.name,
    };
  });
  response.status(200).json(photos);
});
app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));

/*create a repo named splash-api on github and clone it locally
in the terminal run the command npm init
inside the package.json
add a start script: "start": "nodemon server.js"

create a server.js file
in the terminal enter the command:
npm i dotenv express nodemon cors axios
create a .env file and a .gitignore file
inside the .gitignore file add:
.env
node_modules
inside the .env file set the PORT=8090


import express, cors and axios:
const express = require("express")
const cors = require("cors")
const axios = require("axios")
Load environment variables from the dotenv
require("dotenv").config()
enbales environment variables through process.env
Declare app as express invoked
const app = express()
enable cors
app.use(cors())
set the PORT
const PORT = process.env.PORT || 8090
create an endpoint for the home route and set a response
invoke app.listen to listen on the PORT and run a callback to console.log in the terminal
In the terminal run nodemon server
check localhost:8090 is running. 
Google unsplah API or go to https://unsplash.com/developers
Register as a developer
click new application
Accept terms and complete form
set ACCESS_KEY in the  .env
Note: be sure to stop and restart the server
Go to documentation
select search photo by keyword
Go to Public Authetication
copy the link: https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
just save this somewhere so you have it and don't need to look for it again


create an app.get endpoint and set the Route to /photos
set the callback function with request, response however:
make sure the function is async
use await on the axios.get(API)
declare a variable named API and set the value to the API url
declare a variable named res and set the value to:
await axios.get(API)
console.log(res.data)
In the browser search localhost:8090/photos
show the terminal in VScode we have a results array
Run console for:
console.log(res.data.results)
console.log(res.data.results[0].urls)
we want the regulars
declare a variable named photos and set the value to:
res.data.results.map((photo)=>{})
inside the .map function return an object with properties:
id: photo.id
img_url: photo.urls.regular,
original_image: photo.links.self,
photographer: photo.user.name,
finally set the response.json(photos)
when you set your API variable to the url set the url to:
https://api.unsplash.com/search/photos/?client_id=YOUR_ACCESS_KEY&query=wizard
replace the YOUR_ACCESS_KEY to process.env......
