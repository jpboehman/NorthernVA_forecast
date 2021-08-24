This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Appian Weather application:
This is a React-based application built for fetching forecasts of cities located in the northern Virginia area. Please follow these instructions for how to use this application:
1) Clone and open the application. Run `npm install` to download the dependencies needed for this app, such as `json-server` and `lodashGet`.

2) Run `npm start` to start the application and view it in the browser. The application will be started on port 3000 type in `localhost:3000` in your browser to check it out!

3) This application mocks interacting with a backend by using the npm module `json-server`. This is where all of the test data is stored, and mimics the behavior of fetching and utilizing data from a real remote API. The searching functionality of this application depends on this server. To realize the full functionality of the app, open another terminal and run the command `npm run server` (before searching for any forecasts). The server will start on port 5000 and serve the assets back to the front-end.

4) Search for a forecast by either typing in a date-range, or by typing in a city within the northern Virginia area. The results will populate in a horizonal format below the `Search by Date / Time` button.

5) Run `npm test` to run the tests for this application. There are tests for the reducer function as well as the TextField component.

6) Thank you for your time!

Example 1:
![image](https://user-images.githubusercontent.com/69166665/130624786-5a6ea91e-8e1d-409b-81d2-01b18b3cefc3.png)

Example 2:
 ![image](https://user-images.githubusercontent.com/69166665/130624916-9ad28508-c6e0-4b2a-8859-7ad1aeb8f8e9.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run server`

Runs the local `json-server` that holds all of the test data used for searching forecasts.

### `npm test`

Launches tests to validate the reducer function (used for managing global state) and logs the result to the console

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
