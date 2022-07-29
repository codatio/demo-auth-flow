# Link Demo Application

This is an app that demonstrates the potential implementation of the Codat Link product.

This app is an example of how to integrate to the Codat APIs. It should not be run in a production environment.

Signing up in the app will create a new user account with data stored locally in the bin folder of the server app. When logging into the UI, the `userId` for the account will be stored in local storage indefinitely, but won't keep the user logged in.

**What has been implemented:**
* Basic UI pages:
  * Login page
  * User dashboard that shows user's data connections to Codat
  * Loan application page
  * Platform selection modal window
* Authentication based on a user ID (no password)
* Mock backend storage system
* Basic error handling

**What hasn't been implemented:**
* Protection of data

## Built with:

UI:
* [React.js](https://reactjs.org/)
* [Create React App](https://create-react-app.dev/) to bootstrap the UI
* [Material UI](https://mui.com/)

Server:
* [Express.js](https://expressjs.com/)
* [Concurrently](https://www.npmjs.com/package/concurrently)

  >`Concurrently` is to run the client and server code concurrently in a local environment.
* [Node.js](https://nodejs.org/en/), long-term support (LTS) version
* [nodemon](https://www.npmjs.com/package/nodemon)
* [node-localstorage](https://www.npmjs.com/package/node-localstorage)
  >`node-localstorage` is used to mock out a proper data store system. Login merchant data is stored locally. If deployed to a cloud environment, this will be wiped with each new release.



## Prerequisites
* Set up a Codat account if you don't have one already. See [Codat's documentation](https://docs.codat.io/docs/your-first-call-to-the-api-using-api-explorer#find-your-api-key) for how to sign up for a free trial.
* Make sure you have a recent LTS version of `Node.js` installed.
* After the linking process is complete, the user should be redirected back to the Link demo app. Set up the redirect URL to `https://localhost:3000/redirect` To set up the redirect URL, follow the instructions in [Codat's documentation on Redirect URLs](https://docs.codat.io/docs/redirect-urls).

## Installation
1. Get your Codat client API key. See [here](https://docs.codat.io/docs/your-first-call-to-the-api-using-api-explorer#find-your-api-key) for how to get your API key.
2. Install NPM packages:
   ```sh
   npm install
   ```
4. Rename the `.env.template` file in the `server` directory to `.env`
3. Replace the following in the newly created `.env` file in the `server` directory
   - `{{CODAT_API_KEY}}` with your Codat client API key
4. Start the app. This will run the app in a watch build mode.
   ```sh
   npm start
   ```
5. Navigate to http://localhost:3000