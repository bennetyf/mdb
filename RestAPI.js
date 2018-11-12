const express = require('express');
// const bodyParser = require('body-parser');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');

const reset = require('./data/resetDB.js');
const read = require('./data/read.js');

const read_db_callback = (response) => (err, db_res) => {
    console.log(db_res[0]);
    response.status(200).json(db_res[0]).end();
}

let app = express();

app.use(logger('dev'));
app.use(cors());
app.get('/:name',(req, res, next)=>{
    let name = req.params.name;
    let city = req.query.city;
    switch(name.toLowerCase()) {
        case "current":
        (async()=>{
            await reset();
            let query = read(city.toLowerCase());
            query.exec((err,result)=>{res.status(200).json(result[0]).end();});
        })();
            // read(city.toLowerCase())(read_db_callback(res));
            // res.status(200).json(data_current[city.toLowerCase()]);
            break;

        case "forcast":
        break;

        default:
        break;
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

app.listen(5000);
