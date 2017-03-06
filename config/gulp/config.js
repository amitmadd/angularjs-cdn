var envConfig = require('./utils/env');

module.exports = function () {
    var root = '',
        src = root + 'src/',
        config = root + 'config/',
        app = src + 'app/',
        // required as systemjs-extension uses tmpApp
        tmpApp = src + 'app/',
        e2e = root + 'e2e/',
        assets = src + 'assets/',
        assetsPath = {
            styles: assets + 'styles/',
            images: assets + 'images/',
            fonts: assets + 'fonts/',
            customIcons: assets + 'custom-icons/'
        },
        index = src + 'index.html',
        tsFiles = [
            app + '**/!(*.spec)+(.ts)'
        ],
        externalFonts = {
            'font-awesome': 'node_modules/font-awesome/fonts/*.*'
        },
        // external css paths to files in node_modules folder
        externalCSS = [
            "node_modules/font-awesome/css/font-awesome.min.css"
        ],
        build = {
            path: 'build/',
            app: 'build/app/',
            fonts: 'build/fonts/',
            assetPath: 'build/assets/',
            assets: {
                lib: {
                    js: 'lib.js',
                    css: 'lib.css'
                }
            }
        };

    var e2eConfig = {
        seleniumTarget: 'http://127.0.0.1:3000'
    };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            runtime: false,
            globalDefs: {
                DEBUG: false,
                ENV: 'production'
            }
        }
    };

    var gulpConfig = {
        root: root,
        config: config,
        src: src,
        app: app,
        tmpApp: tmpApp,
        externalFonts: externalFonts,
        externalCSS: externalCSS,
        e2e: e2e,
        e2eConfig: e2eConfig,
        assets: assets,
        index: index,
        build: build,
        assetsPath: assetsPath,
        tsFiles: tsFiles,
        systemJs: systemJs
    };

    if (envConfig.ENV === envConfig.ENVS.DEV)
    {
        var historyApiFallback = require('connect-history-api-fallback');
        var browserSync = {
            dev: {
                port: 3000,
                injectChanges: false,
                server: {
                    baseDir: './src/',
                    middleware: [historyApiFallback()],
                    routes: {
                        "/node_modules": "node_modules",
                        "/src": "src",
                        "/build": "build"
                    }
                },
                files: [
                    src + "index.html",
                    src + "systemjs.conf.js",
                    assetsPath.styles + "main.css",
                    tmpApp + "**/*.js",
                    app + "**/*.css",
                    app + "**/*.html"
                ]
            },
            prod: {
                port: 3001,
                server: {
                    baseDir: './' + build.path,
                    middleware: [historyApiFallback()]
                }
            }
        };

        gulpConfig.browserSync = browserSync;
    }

    return gulpConfig;
};
