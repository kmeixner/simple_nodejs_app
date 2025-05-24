# nodejs practice repository

This repository is a basic nodejs example setup.

## Project Structure

- README.md : this README file
- my_modules/ L modules that I created
    - mydatemodule.js : a module I created to return Date/Time
- myfirst.js : the main application
- node_modules/ : (do not commit) generated Node modules (eg: npm install upper-case)
- package-lock.json : (should be committed) contains metadata about project and its dependencies
- package.json : (should be committed) ensures exact versions of all dependencies installed, for reproducible builds.

## Requirements

Requires Node.js

## Installing the Application

1. ** clone the git repository **
git clone https://github.com/kmeixner/docker_nodejs.git

2. ** install upper-case module **

npm install upper-case

## Running the Application

1. **To start node app**

a) Regular Mode:

    node main.js

b) Dev Mode (will sense changes and update)

    nodemon main.js

## API Endpoints

The backend server has the following API endpoint:
- `GET /`: Returns a message about the date and time and HELLO WORLD`.

## Stopping the Application

<ctrl><c> to end node/nodemon from running the app

## Notes

To install the upper-case/upperCase() module:

npm install upper-case

This will generate package.js and package-lock.js which should be
committed to your Git archive.

You should commit both package.json and package-lock.json to your Git repository. The package.json file contains metadata about your project and its dependencies, while the package-lock.json file ensures that the exact versions of all dependencies are installed, leading to reproducible builds.

The package-lock.json file is particularly important for maintaining consistency across different environments and ensuring that everyone working on the project has the same dependency tree.

When you commit package-lock.json, it helps prevent issues caused by different versions of dependencies being installed on different machines, which can lead to unexpected behavior or bugs.

In summary, committing both package.json and package-lock.json to your Git repository is recommended to ensure consistency and reproducibility in your project's dependency management.