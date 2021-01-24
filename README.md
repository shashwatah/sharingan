<h1 align="center">
  <br>
    <img src="https://github.com/Araekiel/sharingan/blob/master/assets/images/logos/sharingan-fill.png" alt="GitWiz" width="200">
  <br>
  Sharingan
  <br>
</h1>

<h4 align="center">
A Real-Time object detection app. Built with <a href="https://www.electronjs.org/">Electron</a>, <a href="https://www.tensorflow.org/js/">Tensorflow.js</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>.
</h4>

<p align="center">
  <a><img alt="MIT License" src="https://img.shields.io/apm/l/atomic-design-ui.svg?"></a>
  <a><img alt="Github Release" src="https://img.shields.io/badge/release-v1.0-blue"></a>
  <a href="http://makeapullrequest.com">
    <img alt="PRs Welcome"src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat">
  </a>
</p>

<p align="center">
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#installation">Installation</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#run--build">Run & Build</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#contribution">Contribution</a> •
  <a href="#refs">Refs</a> •
  <a href="#authors">Authors</a> •
  <a href="#license">License</a>
</p>

<img alt="Gif" src="https://raw.githubusercontent.com/Araekiel/gitwiz/master/src/public/images/other/gitwiz.gif">

## Prerequisites

- Git is need to clone repository on your machine.
- npm is needed to install packages.
- Node.js is needed to run GitWiz.

### Ubuntu

Install git, Node.js and npm on your machine running Ubuntu:

```bash
$ sudo apt-get install git-core
$ sudo apt install nodejs
$ sudo apt install npm
```
### Windows 

Use the official links for downloading on Windows:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

Run the following commands to confirm if the installation was successful:

```bash
$ git --version
$ node --version
$ npm --version 
```

## Installation

Clone the repo and cd into the directory: 

```bash
$ git clone https://github.com/Araekiel/gitwiz.git
$ cd gitwiz 
```

Then install the node-modules in package.json:

```bash
$ npm install
```

## Configuration 

Make a .env file and set the following environment variables: 
- **PORT** - For the port the server is going to run on
- **MORGAN_METHOD** - For the method that morgan is going to log requests
- **GITHUB_TOKEN** - Auth Token to make requests to GitHub GraphQL API
- **GITLAB_TOKEN** - Auth Token to make requests to GitLab GraphQL API

## Run & Build

Run the app with the following command:

```bash
$ npm start
```

Run the app with nodemon with the following command:

```bash
$ npm run dev
```
> nodemon will use the config specified in *nodemon.json*

Open a browser and type **localhost:_port_**

Build the app(Compile TypeScript to JavaScript) with the following command:

```bash
$ npm run build
```

Bundle the frontend: 

```bash
$ npm run buildFront
```

## Deployment 

GitWiz is currently deployed on Heroku.
<br/>
Click [here](https://gitwiz.herokuapp.com) to visit.

## Contribution

Fork the repository and open a pull request to contribute.
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Refs

### Libraries:

- [ptarjan/node-cache](https://github.com/ptarjan/node-cache)
- [ozh/github-colors](https://github.com/ozh/github-colors)

### APIs:

- [Github GraphQL API](https://developer.github.com/v4/)
- [Gitlab GraphQL API](https://docs.gitlab.com/ee/api/graphql/)

## Authors

- **Araekiel** - [Github](https://github.com/Araekiel)

## License

[MIT](https://choosealicense.com/licenses/mit/)
