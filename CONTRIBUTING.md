# Contributing

After cloning the repository, install project dependencies. If you haven't worked with Yarn v2+ before, you will need to enable [Corepack](https://yarnpkg.com/corepack) first.

```bash
# First-time Yarn v2+ setup.
corepack enable

# Install dependencies.
yarn install
```

To build and test all code, run:

```bash
# Build
yarn build

# Test
yarn test
```

### Pull requests

Before adding new features or packages to the repository, please open an issue on GitHub to discuss
your proposal. Some features may not fit the current scope of the project, or may be more than I am
able to maintain long-term. Changes including test coverage are strongly preferred. If you're not
sure how to fix an issue, contributing a failing unit test for the issue can be very helpful!

### Testing

Unit tests use [Ava](https://github.com/avajs/ava).

```bash
# run all tests
yarn test

# run all tests, watching for source file changes to re-run
yarn test --watch

# run one test
yarn test src/path/to/file.test.ts

# run one test, watching for source file changes to re-run
yarn test src/path/to/file.test.ts --watch
```

To use a debugger and step through tests using Chrome Developer Tools, see [_Debugging tests with Chrome DevTools_](https://github.com/avajs/ava/blob/main/docs/recipes/debugging-with-chrome-devtools.md). Add a `debugger;` statement to the body of the test, then run:

```bash
yarn test:debug src/path/to/file.test.ts --break
```

### Releasing

> NOTE: Only the maintainer can create new releases.

To create a release, first increment the package version.

```bash
yarn version [ patch | minor | major | X.Y.Z ]
```

Then publish to npm and push to GitHub:

```bash
# stable release
yarn release

# alpha release
yarn prerelease
```
