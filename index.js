module.exports = (neutrino, options = {}) => {
  neutrino.config.module
    .rule('typescript')
    .test(/\.tsx?$/)
    .use('ts-loader')
    .loader(require.resolve('ts-loader'))
    .options({ ...options });
};
