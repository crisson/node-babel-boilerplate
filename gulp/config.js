var root = '.'

// TODO: add BrowserSync, nodemon, etc
module.exports = {
    browserify: {
        dest: 'build/assets/js/bundle.js',
        entry: "./src/web-client/index.js",
        vendor: {
            dest: 'build/assets/js/vendor.min.js',
            destmin: './',
            opts: {},
            requireFiles: []
        }
    },
    
    less: {},
    img: {},
    prepareDeploy: {}
}