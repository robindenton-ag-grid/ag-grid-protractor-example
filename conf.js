exports.config = {
    framework: 'jasmine',
    specs: ['spec.js'],
    baseUrl: 'http://localhost:4200',
    onPrepare: function() {
        // don't wait for Angular - we are not using it here
        browser.ignoreSynchronization = true;
    }
}