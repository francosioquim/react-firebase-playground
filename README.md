# Crab Cake Entree

A Cake starter project on steroids!

### Getting Started

```sh
yarn && yarn start
```

### Features

-   Uses [recompose](https://medium.com/@cdelaorden/using-recompose-to-achieve-better-separation-of-concerns-in-react-applications-cf7d30721f59) to achieve better separation of concerns in react applications
-   Simplified Redux with less overheads using [Modular redux](https://github.com/erikras/ducks-modular-redux)
-   Baked with [Cake-UI v1](https://cakeui.roamcore.com/)
-   CirclCI 2.0 config with private repo login
-   Out of the box pages (Login, Reset Password, etc. ) with Sauce ready API calls via [Axios](https://www.npmjs.com/package/axios)
-   Built-in [security](https://stackoverflow.com/questions/244882/what-is-the-best-way-to-implement-remember-me-for-a-website) and session handling
-   Uses [Formik](https://medium.com/@ilonacodes/why-formik-with-react-e640c1934d6) with asynchronous error handling and feedback
-   [Prettier + Eslint](https://blog.gojekengineering.com/eslint-prettier-for-a-consistent-react-codebase-eaa673debb1d) for a consistent codebase

### Folder Structure

    .
    ├── ...
    ├── src
    │   ├── assets
    │   ├── components
    │   │       ├── atoms
    │   │       ├── molecules
    │   │       ├── organisms
    │   │       └── templates
    │   ├── constants
    │   ├── containers
    │   ├── modules
    │   ├── styles
    │   ├── utils
    │   └── config.js
    └── ...

### Deployment

Add the following circleCI variables:
_NPM_USER_, _NPM_PASS_, _NPM_EMAIL_
