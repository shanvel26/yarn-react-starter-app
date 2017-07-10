var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var hbs = require('hbs');
var MongoClient     = require('mongodb').MongoClient
const session       = require('express-session')
const MongoStore    = require('connect-mongo')(session)

var index = require('./routes/index');
var users = require('./routes/users');
var meeting = require('./routes/meeting');

var app = express();
var compiler = webpack(webpackConfig);

var db
var url = 'mongodb://127.0.0.1:27017/mymeeting';
MongoClient.connect(url, function(err, db) {
    if (err)
        console.log(err)
    else
        console.log("Client MongoDB connected...")
    global.db = db
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
// var options = { beautify: true };
// app.engine('jsx', require('express-react-views').createEngine(options));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'mysecretkey',
  saveUninitialized: false,
  resave: true,
  store: new MongoStore({
    url: 'mongodb://127.0.0.1:27017/mymeeting'
  })
}))


app.use(webpackDevMiddleware(compiler, {
  // publicPath: "/", // Same as `output.publicPath` in most cases.
  // filename: "bundle.js",
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', index);
app.use('/users', users);

app.post('/new', meeting.new);
app.get('/find', meeting.find);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
