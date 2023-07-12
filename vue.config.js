module.exports = {
    assetsDir: 'static',
    runtimeCompiler: false,
    productionSourceMap: false,
    lintOnSave: false,
    publicPath: '/',

    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    },

    configureWebpack: {
        resolve: {
            symlinks: false,
            alias: {
                vue$: 'vue/dist/vue.esm.js',
            },
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    app: {
                        chunks: 'all',
                        name: 'main',
                        test: /[\\/]src[\\/](.*)[\\/]/,
                    },
                    vendors: {
                        chunks: 'all',
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]@coreui[\\/]((?!icons).*)[\\/]/,
                    },
                    // Merge all the CSS into one file
                    styles: {
                        name: 'styles',
                        test: /\.s?css$/,
                        chunks: 'all',
                        minChunks: 1,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                },
            },
        },
    },

    css: {
        // requireModuleExtension: true,
        sourceMap: true,
    },

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
            enableBridge: false,
        },
    },
};
