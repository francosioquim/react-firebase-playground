# Crab Cake Entree

### Getting Started
Follow this [guide](https://app.tettra.co/teams/roamltd/pages/how-to-create-a-new-fe-project) on Tettra

### Usage

Start the App

```bash
yarn start
```

Create build files

```bash
yarn build
```

Deploy to Github pages

```bash
yarn deploy
```

### Pulling changes

Add this as your upsteam url

```bash
git remote add upstream https://github.com/Roamltd/crab-cake-entree.git
```

Collect the latest changes

```bash
git fetch
```

Checkout which branch you want to merge and merge it to upstream

```bash
git checkout develop
git merge upstream/master
```


### Todos

- Integrate with IDEs (VSCode, IntelliJ, Atom, etc)
- Install circle CI configs and webpack env (develop, staging, production)
- Optimise webpack config per envitonment
- Add configuration files for CircleCI
- Add an "easy-install" version to cake-cli
- Eslint: finalise Eslint rules
