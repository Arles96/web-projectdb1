import createError from 'http-errors';
import express  from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';
import indexRouter from './routes/index';
import bodyParser from 'body-parser';

const app = express();

// view engine setup
/*app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');*/

//Middleware
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), ()=>{
  console.log('server on port ', app.get('port'));
});