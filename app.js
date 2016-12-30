// var koa = require('koa');
// var app = koa();

const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const isProduction = process.env.NODE_ENV === 'development';
const templating = require('./templating');



app.use(bodyParser());

app.use(templating('static', {
	noCache: !isProduction,
	watch: !isProduction
}));

app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');