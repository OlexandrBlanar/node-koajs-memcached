module.exports = {
    app: {
        name: 'myKoajsApp',
        version: '0.1.0'
    },
    server: {
        port: 8081,
    },
    memcached: {
        port: 11211,
        host: '127.0.0.1'
    },
    template: {
        path: 'app/views',
        options: {
            extension: 'ect',
            cache: false
        }
    },
    session: {
        secretKey: 'myKoajsSecretKey'
    }
};