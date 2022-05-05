const plugins = ["@babel/transform-runtime"];

if (process.env.NODE_ENV !== "production") {
  plugins.push("babel-plugin-typescript-to-proptypes");
}

module.exports = {
  presets: ["@babel/react", "@babel/typescript", "@babel/env"],
  plugins,
};
