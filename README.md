Here we create a to-do app built with the React JavaScript library.

This app is based upon the tutorial by NetNinja which you can find [here](https://www.youtube.com/watch?v=yZ0f1Apb5CU&list=PL4cUxeGkcC9i0_2FF-WhtRIfIJ1lXlTZR).

I built this app over several versions (v0.1, v0.2, etc...) each of which are available on GitHub [here]()

You need node.js installed on your machine. Find it [here](https://nodejs.org/en/download/).

Firstly, let's install React on our machine.
`npm install -g create-react-app`

Then navigate to a irectory on your machine where you wish to build the Todo app and run the following code which in this case will create a directory called 'todo-app' in the current directory.
`create-react-app todo-app`

Then we can change directory into our app run the app. Note all the files that have been downloaded at the time of the apps creation.
`cd todo-app`
`npm start`

If we now open our browser and navigate to `localhost:3000` we should see the newly installed basic app up and running.

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
