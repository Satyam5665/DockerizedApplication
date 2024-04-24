# Steps Followed :
Dockerizing a React application involves encapsulating the React app into a Docker container so it can be easily deployed and run in any environment that supports Docker. Here are the steps to dockerize a React application:

1. **Create a Dockerfile**: This file contains instructions for building the Docker image for your React application. In the root directory of your React project, create a file named `Dockerfile` (without any file extension) and add the following content:

    ```Dockerfile
    # Use an official Node.js runtime as the base image
    FROM node:alpine

    # Set the working directory in the container
    WORKDIR /app

    # Copy package.json and package-lock.json (if available)
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    # Build the React app for production
    RUN npm run build

    # Expose the port the app runs on
    EXPOSE 3000

    # Command to run the React app
    CMD ["npm", "start"]
    ```

    This Dockerfile sets up a Node.js environment, installs dependencies, copies the application code, builds the React app, exposes port 3000 (the default port for React apps), and starts the application.

2. **Build the Docker Image**: Open a terminal or command prompt, navigate to the root directory of your React project (where the `Dockerfile` is located), and run the following command to build the Docker image:

    ```
    docker build -t my-react-app .
    ```

    Replace `my-react-app` with a suitable name for your Docker image.

3. **Run the Docker Container**: After building the Docker image, you can run a Docker container based on that image. Use the following command:

    ```
    docker run -d -p 3000:3000 my-react-app
    ```

    This command runs the Docker container in detached mode (`-d`), mapping port 3000 of the host to port 3000 of the container (`-p 3000:3000`). Replace `my-react-app` with the name you used in the previous step.

4. **Access the React App**: Once the Docker container is running, you can access the React application by opening a web browser and navigating to `http://localhost:3000`.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
