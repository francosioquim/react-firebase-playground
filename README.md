# Crab Cake Entree

A Cake starter project on steroids!

### Getting Started

```sh
$ git clone https://github.com/Roamltd/crab-cake-entree.git
$ cd crab-cake-entree
$ yarn
$ yarn start
```

### Features

-   Uses [recompose](https://medium.com/@cdelaorden/using-recompose-to-achieve-better-separation-of-concerns-in-react-applications-cf7d30721f59) to achieve better separation of concerns in react applications
-   Uses [Atomic Design](http://atomicdesign.bradfrost.com/) methodology for component structure
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
    ├── build                       # Target build folder
    ├── public                      # Override index.html and favicon.ico
    ├── src
    │   ├── assets                  # Static assets such as fonts, images, videos
    │   ├── components              # Refer to http://atomicdesign.bradfrost.com/chapter-2/
    │   │       ├── atoms           # Basic components that can’t be broken down any further
    │   │       ├── molecules       # Relatively simple groups of UI components
    │   │       ├── organisms       # Relatively complex UI components composed of groups of molecules
    │   │       └── templates       # Page-level objects that place components into a layout
    │   ├── constants               # Global app constants
    │   ├── containers              # Data-fetching and page components
    │   ├── modules                 # Modular Redux: actions, reducers, selectors
    │   ├── styles                  # Theme and global CSS files
    │   ├── utils                   # Helper functions
    │   └── config.js               # Application specific settings
    ├── .env.{environment}          # Environment specific variables
    ├── config-overrides.js         # Override webpack config here
    └── ...

### Deployment

Add the following circleCI variables:
_NPM_USER_, _NPM_PASS_, _NPM_EMAIL_
