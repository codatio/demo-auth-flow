# demo-auth-flow

This project is a simple implementation of a Codat custom-built [auth flow]([https://docs.codat.io/docs/auth-flow](https://docs.codat.io/auth-flow/build/build-your-own-authorization-journey)), enabling your customers to connect their financial accounts. You can experience the demo [here](https://codat-dev-link-demo.azurewebsites.net/home).

We recommend, where possible, using our [Embedded Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link).

Note: _This app is for demonstrative purposes only, and should not be used in a production environment._

## The demo

This demo is indicative of a where Codat might fit in to a digital lending onboarding experience. Copay is a fictional digital lender looking to gather financial data from prospective customers in order to make a credit decision.

## Running the project

### Prerequisites
* Set up a Codat account if you don't have one already. See [Codat's documentation](https://docs.codat.io/docs/your-first-call-to-the-api-using-api-explorer#find-your-api-key) for how to sign up for a free trial.
* Make sure you have a recent LTS version of `Node.js` installed.
* After the linking process is complete, the user should be redirected back to the Link demo app. Set up the redirect URL to `https://localhost:3000/redirect` To set up the redirect URL, follow the instructions in [Codat's documentation on Redirect URLs](https://docs.codat.io/docs/redirect-urls).

### Installation
1. Get your Codat client API key. See [here](https://docs.codat.io/using-the-api/authentication) for how to get your API key.
2. Install NPM packages:
   ```sh
   npm install
   ```
4. Copy the `.env.template` file in the `server` directory and rename it `.env`
3. Replace the following in the newly created `.env` file in the `server` directory
   - `{{CODAT_API_KEY}}` with your Codat client API key
4. Start the app. This will run the app in a watch build mode.
   ```sh
   npm start
   ```
5. Navigate to http://localhost:3000

## Built with:

### UI
* [React.js](https://reactjs.org/)
* [Create React App](https://create-react-app.dev/) to bootstrap the UI
* [Material UI](https://mui.com/)

### Server
* [Express.js](https://expressjs.com/)
* [Concurrently](https://www.npmjs.com/package/concurrently)

  >`Concurrently` is to run the client and server code concurrently in a local environment.
* [Node.js](https://nodejs.org/en/), long-term support (LTS) version
* [nodemon](https://www.npmjs.com/package/nodemon)
* [node-localstorage](https://www.npmjs.com/package/node-localstorage)
  >`node-localstorage` is used to mock out a proper data store system. Merchant data is stored locally. If deployed to a cloud environment, this will be wiped with each new release.
