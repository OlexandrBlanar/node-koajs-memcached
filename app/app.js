var koa = require('koa'),
    config = require('config');

var app = koa();

//Comment this line to disable sessions
require('./helpers/session')(app);

//Comment this line to disable koa-body-parser
require('./helpers/bodyparser')(app);

require('./helpers/render')(app);

require('./routes')(app);

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});
