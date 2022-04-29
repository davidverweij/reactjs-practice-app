# ReactJS Practice App

_A practice project for the EPAM ReactJS Mentoring Program, building a Movie database app._

### Usage

This Typescript project uses `webpack` and `babel` for transpiling and bundling with hot-reloading and source-maps enabled for development and minifying and bundling for production. A pre-commit hook (using `husky`) runs `eslint` and `prettier`, whilst `babel` and `webpack` plugins check static types and compile `PropTypes` for runtime type checking (in development mode) - see below. The project can be run both with `Webpack` and `Docker`.

#### Setup

Using Docker, you can run the development setup instantly - with hot-reloading changes within the `/src/` folder at [localhost:8080](http://localhost:8080/) run:

```shell
npm run docker
```

> To use the installed NodeJS modules in the docker image, we persist this subfolder to prevent it from overriden. Tradeoff:
>
> - _Pro_: the image can be run 'as-is' and is OS-agnostic
> - _Con_: the volume persist after taking container down, and new dependencies require a image rebuild (with `docker-compose build`).

Running Docker _only_ does not provide you with IntelliSense, static typing and all the other benefits (_within your IDE - it does so in the container though_). Instead, also setup your environment by running:

```shell
npm install         # dependencies
npm run precommit   # sets up pre-commit linters
```

You can either continue with the Docker setup, or shut it down and run it locally:

```shell
npm run docker:stop
npm start              # start dev server
```

> If the Docker setup is still running, the `npm start` command will result in _another_ endpoint, e.g. [localhost:8081](http://localhost:8081/) - see you terminal for the exact endpoint.

To bundle the project for production, run the build command and _optionally_ push to GitHub Pages with the following commands:

```shell
npm run build
npm run deploy
```

#### Notes

> [typescript-to-proptypes](https://www.npmjs.com/package/babel-plugin-typescript-to-proptypes) plugin for `babel` is used to generate `PropTypes` (runtime props checking _in development_ - useful with dynamic data sources) based on `Typescript`.
> [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) plugin for `webpack` is used to perform _fast_ static type checking for Typescript (it does not transpile Typescript, the `babel-loader` does. However, `babel` doesn't perform Typescript checks, and `ts-loader` negates the `typescript-to-proptypes` plugin if used).
