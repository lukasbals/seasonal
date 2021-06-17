# 🥗 Seasonal app

Seasonal is your seasonal/regional calendar for food. You can find the hosted version
on [seasonal.wiki](https://seasonal.wiki). The project is based on
[React](https://reactjs.org) and you can find the storybook component library on
[storybook.seasonal.wiki](https://storybook.seasonal.wiki).

[![Actions Status](https://github.com/lukasbals/seasonal/workflows/build/badge.svg?branch=main)](https://github.com/lukasbals/seasonal/actions)

## ⚙️ Technologies used

- [React](https://reactjs.org) as the JS library.
- [Storybook](https://storybook.js.org/) as a the component library accessible on
  [storybook.seasonal.wiki](https://storybook.seasonal.wiki).
- [MobX](https://mobx.js.org/README.html) as the state management tool.
- [Styled components](https://styled-components.com/) for the styling.
- [Prismic](https://prismic.io/) as the CMS.

## 👩‍💻 Development:

Install dependencies:

```bash
yarn install
```

Start the app in development mode:

```bash
yarn run dev
```

### Run [storybook](https://storybook.js.org/)

```bash
yarn storybook
```

### Quality analysis:

```bash
yarn test # Run the tests

yarn lint # Lint the code using eslint

yarn lint-fix # Lint the code and fix issues if there are some

yarn format # Format the code using prettier
```

### Dev tools used:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## 🏃‍♀️ Run on production:

Install dependencies:

```bash
yarn install
```

```bash
yarn build
```
