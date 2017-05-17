# Full Stack w/ create-react-app

### overview
This project demonstrates how to proxy a node server with a generated react application.

`git clone https://github.com/fresh5447/full-stack-create-react-app`

`cd full-stack-create-react-app && npm install`

Then create you React app using create-react-app:

( if you haven't installed - `sudo npm i -g create-react-app`)

`create-react-app client`

Tip:

If you use `custom-react-scripts` instead, it will create a `.env` file in you `client/` folder. This allows you to easily update your webpack config to allow you to do things like use modulus CSS or ES7 decorators.

`create-react-app my-app --scripts-version custom-react-scripts`

And then you can add something like this to your `client/.env`

```
REACT_APP_SASS=true
REACT_APP_LESS=true
REACT_APP_STYLUS=true
REACT_APP_CSS_MODULES=true
REACT_APP_DECORATORS=true
```

Make sure to add the following proxy to your `client/package.json`
`"proxy": "http://localhost:3001/"`

Now, if you run `npm run dev` foreman will look at the `Procfile.dev`, and simultaneously start both your node and react application.

You can hit you api endpoints at `localhost:3001` meanwhile viewing your react app in `localhost:3000`

In summary a custom script in the the node `package.json` tells forman to look at the `Procfile.dev`, for directions. The proxy in the client 'package.json' allows us to skip any CORS issues.

This is also set for heroku. Just head into client and do an `npm run build` to make a prouction build, and then heroku will start your app using the `npm run start command.`


For your convenience there is already a functional RESTful API for the resource 'Article', just make sure you have Mongo running.

#### Relevant Links
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [custom react scripts](https://github.com/kitze/custom-react-scripts)
* [foreman](https://www.npmjs.com/package/foreman)
