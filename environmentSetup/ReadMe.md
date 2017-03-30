# Setting up a React environment

React is a Javascript library, by Facebook, that is used for building user interfaces.
We will be using the following for the whole set-up:
- Webpack - A module bundler
- Babel - A Javascript compiler
- ES6 - A relatively new Javasript standard
- Yarn - A package manager
- React - As expected

# Pre-requisites
 Yarn or Node pre-installed on our machines.
 
 Main reasons for using ```yarn ``` are:
- If you had already installed a package before, you can install it again without any internet connection. Apart from the fact that you can install packages offline, this also increases the speed of your installments.
- The same exact dependencies are installed on any machine. This essentially means that an install on one machine will work the same exact way on any other machine.

# Getting Started

Open your terminal and create a new folder. Navigate into the folder and initialize the project by running ```yarn init```. yarn init just like npm init will give you a few prompts, just press enter till the end or configure it as you'd like to.
``` mkdir hello-world-react```
```cd hello-world-react```
```yarn init```
When yarn init is finished you will notice in your folder, in this case 'React-world', you'll have a new file ```package.json``` just like if you had done npm init.

# Webpack installation and configuration

Next, we need to install webpack and a few dependencies.

```yarn add webpack webpack-dev-server path```

Inside 'React-world' a new file ```yarn.lock``` is created. This file is what Yarn uses to lock down the exact dependencies to use on another machine.

Now that we have webpack installed we need a config file to give it instructions on what to do. Create a new file, webpack.config.js, on the project folder and open it on your preferred text editor.

```touch webpack.config.js```

open it on your preferred text editor.
```
const path = require('path');
module.exports = {
	entry: './client/index.js',
  	output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
```


Basically, to get a running instance of webpack we need to specify an entry point and an output.

- entry: Specifies the entry file where the bundler starts the bundling process.
- output: Specifies the location where the bundled Javascript code is to be saved.

We, however, also have loaders. These are needed because we want the browser we use to be able to interprate and run JSX code (for React) and code written in ES6.

```loaders```: They are transformations that are applied on a file in our app.
The loaders key property takes in an array of loaders. For our basic set-up we specified that the ```babel-loader``` goes through and transpiles every file that ends with a ```.js or .jsx extension``` excluding the files inside the node_modules folder. You could always add more loaders as needed. For example, if you had separate style sheets in your project you'd require a CSS loader.

# Setting up Babel
```yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev```

Those are all the dependencies we need for Babel. We then have to configure Babel and we can do this in a new file which we'll name ```.babelrc```
```
{
    "presets":[
        "es2015", "react"
    ]
}
```

# Setting up our React Components
So far our file structure looks like this:
- node_modules
- .babelrc
- package.json
- webpack.config.js
- yarn.lock

Create a new folder ```src``` and add an index.js file and an index.html file.
- ```mkdir src```
- ```cd src```
- ```touch index.js```
- ```touch index.html```
- ```cd .. ```

Open up ```index.js``` which is the webpack entry file and add:

```console.log('Hey guys and ladies!!')
```

Update ```index.html``` to:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React App Setup</title>
  </head>
  <body>
  	 <div id="root">
	 </div>
  </body>
</html>
```
React components are in JSX and ES6. The syntax of these two modules is not supported by most browsers therefore, we have to run this code through ``` babel loaders``` and then the bundled output is what we'll specify to be displayed on index.html.

Add the bundled file to our HTML by inserting ```<script src="/bundle.js"></script>```
 A better way to do this is to use ```html-webpack-plugin```
 
 # Run!
 Add a start script in package.json
```
  "scripts": {
    "start": "webpack-dev-server"
  },
 ```
 
 # React 

 - ```yarn add react react-dom```
 - ```cd src```
 - ```mkdir components``` 
 - ```cd components```
 - ```touch App.jsx```
 - ```cd ../..```


Files structure looks like this -

>|-- src   
- components
         |-- App.jsx
- index.html
- index.js

>|--babelrc
|--package.json
|-- webpack.config.js
|--yarn.lock

- Next, create a simple class component 'App'
```
import React from 'react';


export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}
```

- Render our component from our start file, index.js.
 ```
 	import React from 'react';
 	import ReactDOM from 'react-dom';
 	import App from './components/App.jsx';
 	
 	ReactDOM.render(<App />, document.getElementById('root'));
 ```
> yarn start

And here we go with a full React set-up!

[Reference](https://goo.gl/LLgXuX)
