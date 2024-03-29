module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/rasa-front-interactive/" // 替换为你的 GitHub 仓库名
      : "/",
};
