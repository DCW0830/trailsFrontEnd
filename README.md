This is the frontend application for a hiking app that allows users to create an account, search for near by trails and save those trails to their account for later viewing.  In application uses React-Redux. In order for this application to run you will need the Redux browser devtool extention installed and you will need to create an .env file in the root directory of this application and add the following into it: 
REACT_APP_GEOCODE_API_KEY = 'AIzaSyCCVVPW0b8_abXHKJ7yRv1VxxGkUKrlJ7I'
REACT_APP_HIKING_API_KEY= '200404583-82771f36e7eba60bfd203a8f6b23d1fd'

This is typically incorrect to post these keys like this but in order for this application to be viewed I have made this exception. 

You will also need to download and run the backend for this application found here:
backend: https://github.com/DCW0830/trailsbackend

The backend needs to run on Port 3000. Both applications are set to default port 3000, so run Rails Server first for the backend and run NPM Start or Yarn start on the frontend after. It will ask you if you like to run on another port then 3000 since its taken. Say yes. 


This project was bootstrapped with [Create React App](https://com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### ` start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
