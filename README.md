Here we create a to-do app built with the React JavaScript library.

This app is based upon the tutorial by NetNinja which you can find [here](https://www.youtube.com/watch?v=yZ0f1Apb5CU&list=PL4cUxeGkcC9i0_2FF-WhtRIfIJ1lXlTZR).

There is a lot to install upfront to start working with react, let's work our way through the installations.

You need node.js installed on your machine. Find it [here](https://nodejs.org/en/download/).

Let's make a repository on GitHub where we can keep all our versions of this app. In the clone/download we need to copy the remote repository url for pasting into the terminal in a few steps time.

Then, git from our terminal, git clone the GutHub repository.

`git clone git@github.com:danhagg/todo-app.git`

Add all of our files
`git add .`
Commit all our files with a message
`git commit -m"First commit"`
Paste in the destination we copied from gitgub for the remote repository
`git remote add origin git@github.com:danhagg/todo-app.git`
Then push the current folder to GitHub
`git push -u origin master`

Now we have our local and GitHub master up-to-date and synced with each other we can make a new local version of the app to play with and make mistakes on whilst keeping our master version safe.

Let's create a new branch
`git branch v0.1`
and start workoing on it
`git checkout v0.1`

Add `/dist` to `.gitignore` file

Make an `html` file in the `src` folder with the following...

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8" />
  <title>React - ToDo List</title>
</head>

<body>

</body>
</html>
```

`npm init`
Initializes a package.json file to keep track of all our dependencies. Agree to all, add license 'MIT'.

There is now a `package.json` file now holds all our dependencies.

Need to install install `react` and `react-dom`
`npm install react react-dom --save`

install all `babel` packages as development dependencies
`npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev`
Then install webpack as a development dependency
`npm install webpack webpack-dev-server --save-dev`

Create `webpack.config` file to root of the todo-app folder. This file will control how `babel` converts `JSX/ES2015` into JavaScript and where to output that JavaScript. Add following to `webpack.config` file.

```js
// node.js path module assigned to path variable
var path = require('path');

//all our web settings for webpack assigned to module.exports
// looks for all .js in src and combines into single file for reducing http requests
// transform jsx in JS, and look at css files.
module.exports = {
  // look in current/src/app/index.js for root .js file
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
```
create a new file `index.js` in a new folder called `app` in `src` folder. You're directory structure should look something like this!

![image](readme_images/dir_1.png

  Add to `scripts` in the the `package.json` file so we can run a bunch of stuff with a few simple commands.

  ```json
  "start": "npm run build",
  "build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot --port 5000"
  ```

Add to `index.html`, inside the `body` elements
```html
  <script src="/app/bundle.js"></script>
```

To `index.js` add `alert('it works');`
Remember that index.js and all other .js files (and their JSX/JS contents) feed into and are compiled to the `dist/app/bundle.js` file which is passed into the in index.html

Run with
`npm start` and check localhost:5000

Open browser on localhost5000... And you should see your alert from index.js
