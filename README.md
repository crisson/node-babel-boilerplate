# node-babel-boilerplate

This repository represents a folder and configuration boilerplate that I've found useful for writing
client-services nodejs applications.  It follows the structure recommended in this 
[Strongloop blogpost](https://strongloop.com/strongblog/modular-node-js-express/), but also includes
libraries that I almost always include in my `node.js` applications.

## Getting started
I use the following steps to bootstrap a new project from this boilerplate:

- Clone this project with `git clone git@github.com:crisson/node-babel-boilerplate.git`
- Delete its `.git` directory since you'll be creating your own.
- run `npm install` to install dev & application dependencies
- **Optional**: As the blog post suggests, creating a symlink between your `node_modules` 
and `src` directories leads to much cleaner file paths.
- Enjoy

### Licence
[MIT](LICENSE)