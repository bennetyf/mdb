// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

// const express = require('express');
// const path = require('path');
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// const multer = require('multer');

// let upload = multer();
// let app = express();
// // let static = express.static(path.resolve(__dirname,'public'));
// app.set('views', path.resolve(__dirname));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// app.use(logger('dev'));
// app.all('/', (req, res, next)=>{
//   console.log('Request Recieved by Node!');
//   next();
// });

// app.param('id', (req, res, next, id)=>{
//   res.send('The Parameter is: '+id);
//   next();
// });

// app.use('/user',static);
// app.route('/user/:id')
//    .all((req, res, next)=>{console.log("From user");next();})
//    .get((req, res, next)=>{console.log("HaHa");next();});

// app.get('/user/:id', (req,res)=>{console.log('baseUrl'+req.baseUrl)});
// app.get('/', (req, res)=>{res.send("Hello").end()});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', (req, res)=>{res.render('index.html');});
// app.post('/submit', upload.array(), (req, res, next)=>{
//   console.log(req.get('Content-Type'));
//   console.log(req.body);
//   res.set({"X-Powered-By":"FengYuan"});
//   res.json(req.body);
// });
// app.listen(3000);

const data = require('./current.json');
for (let i=0;i<data.length;i++)
  console.log(data[data.citylist[i]]);