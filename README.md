## eCapital Software Engineer Take-home Assignment #

### Goal
Create an Employee Table like seen in the image below. Use any framework (Angular, React, Vue, ect...) or CSS library you would like to accomplish this

![](display/employee-table-example.png)

### Setup ###
* Fork the repository onto your own personal github account
* Setup new project with framework of your choice or create static site
  * Angular example setup
      * Install Node.js v18
      * $ cd ecapital-dev-candidate
      * $ npm install -g @angular/cli
      * $ ng new employee-table
      * $ cd employee-table
      * $ ng serve --open

### The table should have ###
- [x] List all employees in mock-employee.json
  - [x] First name, last name, and salary in currency (ie. $42,000)
* Ability to edit the employee information
- [x] Ability to delete the employee
* Ability to add or create a new employee with a first name, last name, and salary

### Guidelines ###
* Structure your application and components in a modular/reusable way
* Commit code with useful and informative comments
- [x] Use mock data (mock-employees.json)
- [x] Do not implement API code
  - You can mimic a API call by creating a service but return only mock data
- [x] Adding, deleting, or editing employees does not write back to the mock-employees.json file
* Styling: CSS or SCSS can be used, whichever you prefer (can use popular frameworks like Bootstrap as well)

---

## Create-React-App instruction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
