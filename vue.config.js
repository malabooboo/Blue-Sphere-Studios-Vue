// vue-loader 15 proxies non-module <style> blocks with `export * from ...` (no default),
// yet the component does an unused `import style0 from ...`. The import is only for its
// CSS side effect, so this webpack warning is noise. Vue CLI's error overlay reads raw
// compilation warnings (bypassing `ignoreWarnings`), so filter them here instead.
const UNUSED_STYLE_IMPORT = /^export 'default' \(imported as 'style\d+'\) was not found in '.*\.(vue|s?css)\?vue&type=style&/;

class IgnoreVueStyleImportWarnings {
  apply(compiler) {
    compiler.hooks.afterCompile.tap('IgnoreVueStyleImportWarnings', (compilation) => {
      compilation.warnings = compilation.warnings.filter((w) => !UNUSED_STYLE_IMPORT.test(w.message));
    });
  }
}

module.exports = {
  configureWebpack: {
    plugins: [new IgnoreVueStyleImportWarnings()],
  },
  pwa: {
    name: 'Blue Sphere Studios',
    themeColor: '#c0c5cc',
    msTileColor: '#c0c5cc',
    iconPaths: {
      favicon32: '/favicon/favicon-32x32.png',
      favicon16: '/favicon/favicon-16x16.png',
      appleTouchIcon: '/favicon/apple-icon-180x180.png',
      msTileImage: '/favicon/ms-icon-150x150.png'
    }
  }
}