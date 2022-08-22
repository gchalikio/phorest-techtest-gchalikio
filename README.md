# Phorest Technical Test

Generate vouchers for clients as described in this [assignment](https://phorest.notion.site/Consumer-Tribe-Technical-Test-f8dcf606edb34e4d9b9b1648c7313764).

## Features

- Search for a client
- Handling when there are many of the same clients returned
- Create a voucher for that client for a specific amount

## Requirements

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)

## Getting Started

```sh
git clone https://github.com/gchalikio/phorest-techtest-gchalikio.git
cd phorest-techtest-gchalikio
npm install
npm start
```

You can now view phorest-techtest-gchalikio in the browser.

```sh
  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.7:3000
```

## Testing

The tests include unit tests and one integration test for the voucher.

```sh
  npm test

  Test Suites: 8 passed, 8 total
  Tests:       26 passed, 26 total
```

## Scripts

- `npm start` — Launches the app in development mode on [`http://localhost:3000/`](http://localhost:3000/)
- `npm build` — Compiles and bundles the app for deployment
- `npm test` — Run unit tests with Jest
- `npm run lint` — Validate the code using ESLint
- `npm run lint:fix` — Validate the code using ESLint and fix errors
- `npm run format` — Format the code using prettier

## Libraries

- [React.js](https://reactjs.org/) - React is a JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [React Hook Form](https://react-hook-form.com/) - React Hooks for form state management and validation
- [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js
- [Moment.js](https://momentjs.com/) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.
- [Jest.js](https://jestjs.io/) - Delightful JavaScript Testing
- [React Testing Library](https://github.com/testing-library/react-testing-library) - Simple and complete React DOM testing utilities that encourage good testing practices.
- [Bulma](https://bulma.io) - Bulma is a **modern CSS framework** based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

## Src Directory Structure

`├──` api — API requests per model <br>
`├──` assets — Any image/other static assets <br>
`├──` components — React components to be used by pages <br>
`├──` config — Configuration <br>
`├──` lib — Internal helper functions <br>
`├──` pages — Each browser page has its own file/folder here <br>
`├──` styles — Styles grouped by page and components <br>
`└──` tests — Tests grouped by page and components <br>

## Notes

- React.js is used for building the interface.
- create-react-app was used to bootstrap the application, providing some tools out of the box
- Project structure(as described above) folders are grouped by purpose and not by domain, as it is a small application
- Bulma css framework is used to provide a faster development time
- The app is divided in pages, which can contain components and make use of lib and pi functions
- Local component state passing down props is prefered instead of redux/context, as there isn't a big component tree
- The api url and credentials are provided for simplicity from the config folder, but shouldn't be sourced in a real world production application(github secrets, env variables..)
- Eslint is used to enforce code style and Prettier to format the code based on rules
- Application.jsx file is used to keep the App.js file clean and thin and would mostly contain initialization code or calls to the API.
- jsconfig is used to be able to have relative imports in files
- react-hook-form is used to simplify the form creation and validation
- Models and serializations are not used, but should be used in a production app, to apply validation and avoid errors

## Licence

This exercise is [MIT licensed](./LICENSE).
