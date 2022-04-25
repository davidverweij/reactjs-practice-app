# EPAM ReactJS Mentoring

This project uses `Typescript` for static type checking, `webpack` for bundling and `babel` for transpiling.

> [typescript-to-proptypes](https://www.npmjs.com/package/babel-plugin-typescript-to-proptypes) plugin for `babel` is used to generate `PropTypes` (runtime props checking _in development_ - useful with dynamic data sources) based on `Typescript`.
> [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) plugin for `webpack` is used to perform _fast_ static type checking for Typescript (it does not transpile Typescript, the `babel-loader` does. However, `babel` doesn't perform Typescript checks, and `ts-loader` negates the `typescript-to-proptypes` plugin if used).
