# CCM Website [![GitHub CI Status](https://github.com/ChristChurchMayfair/ccm-main-gatsby/workflows/CI/badge.svg)](https://github.com/ChristChurchMayfair/ccm-main-gatsby/actions?query=workflow%3ACI+branch%3Amaster) [![Netlify Status](https://api.netlify.com/api/v1/badges/9f94acb3-4c23-4021-89b4-4a6bf281ff1b/deploy-status)](https://app.netlify.com/sites/ccm-main-gatsby/deploys)

This is the repo for [Christ Church Mayfair's website](https://christchurchmayfair.org).

## Report a problem

If you see something that doesn't look right, <del>text British Transport Police on 61016</del> [create an issue](https://github.com/ChristChurchMayfair/ccm-main-gatsby/issues/new/choose) or [email Tom Duckering](mailto:tom@christchurchmayfair.org).

## Contributing

The website is built using [Gatsby](https://www.gatsbyjs.org/), a static site generator built on [React](https://reactjs.org/). We use [TypeScript](https://www.typescriptlang.org/), [GraphQL](https://graphql.org/) and [Sass](https://sass-lang.com/).

We coordinate and discuss tasks on the #website channel of [our Slack workspace](https://ccm-site.slack.com) - [email Tom Duckering](mailto:tom@christchurchmayfair.org) if you don't already have an account here and want to join.

### Prerequisites

-   A basic knowledge of git.
-   [Yarn](https://classic.yarnpkg.com/en/docs/install) - follow the instructions for your operating system. You may need to install Node.js separately if you are running Windows.

### Getting started

Clone this repo and then inside the folder:

#### Install Yarn modules

```bash
yarn install
```

#### Run the `develop` script

```bash
yarn develop
```

A local version of the website should now be running on port 8000. Open `http://localhost:8000` on your browser.

### Coding guidelines

Please follow all conventions already established in the code. We try to write and structure our code in a way which is as modern and idiomatic as possible, for example:

-   `const` and `let` - no `var`s
-   React hooks wherever possible and required
-   prefer functional-style Javascript
-   optional chaining wherever possible and required.

We use [ESLint](https://eslint.org/) for linting and [Prettier](https://prettier.io/) for formatting. We recommend that you install the plugins for these two tools on your editor of choice.

```bash
# Run the TypeScript type checker
yarn type-check

# Run the lint checker
yarn lint

# Run the formatting checker
yarn prettier-check
```

### Tests

You should write unit tests for any code which performs significant logic. Test files live in a folder named `__tests__` in the same directory as the file to be tested, and should have the `.spec.ts` or `.spec.tsx` extension. For example, if we wanted to write tests for a function in the `numbers.ts` file:

```
mathsUtils/
    isOdd.ts
    isThirteen.ts
    numbers.ts
    __tests__/
        isOdd.spec.ts
        numbers.spec.ts  # tests should be written in here
```

We write tests using the [Jest framework](https://jestjs.io/).

```bash
# Run all tests
yarn test

# Run tests in files whose name contains "filters"
yarn test filters
```

### Repo structure overview

Some highlights:

```
.
├── src/
│   ├── assets/             # fontfaces, icons etc.
│   ├── components/         # shared, reusable React components
│   │   ├── foo.module.scss
│   │   └── foo.tsx
│   ├── content/            # Markdown content
│   ├── mixins/             # Sass mixins
│   ├── pages/              # React components for pages
│   ├── templates/          # Page templates
│   └── utils/              # Common utility functions
└── static/                 # Static files - downloads
    └── _redirects          # christchurchmayfair.org/* redirects
```

### Styling (aka. CSS)

We uses Sass modules to style each component. Style sheets should be named `component-name.module.scss`. We use [BEM naming rules](http://getbem.com/naming/), but without elements since CSS modules are namespaced (elements follow the same conventions as blocks).

An example React component extract:

```tsx
// music-player.tsx
<div className={styles.musicPlayer}>
    <div className={styles.songName}>{songName}</div>
    <div className={styles.buttons}>
        <button
            onClick={onPlay}
            className={classnames(styles.playButton, {
                [styles["playButton--active"]]: isPlaying,
            })}
        >
            Play
        </button>
        <button
            onClick={onPause}
            className={classnames(styles.pauseButton, {
                [styles["pauseButton--active"]]: isPaused,
            })}
        >
            Pause
        </button>
    </div>
</div>
```

...and its accompanying Sass stylesheet:

```scss
/* music-player.module.scss */
.musicPlayer {
    /* ... */

    @media only screen and (max-width: 968px) {
        /* ... */
    }
}

.songName {
    /* ... */
}

.playButton {
    /* ... */

    &--active {
        /* ... */
    }
}

.pauseButton {
    /* ... */

    &--active {
        /* ... */
    }
}
```

Global styles should be written in or referenced from `src/assets/css/global.scss`.

### GraphQL

Gatsby uses GraphQL to fetch data from Markdown content files. We also use it to fetch some data at runtime from [Sanity CMS](https://www.sanity.io/).

You can use the GraphiQL Explorer to test out Gatsby queries - you can access it at http://localhost:8000/___graphql after running `yarn develop`. [Gatsby's website has a guide to using GraphQL.](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)
