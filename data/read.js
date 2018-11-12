const mongoose = require('mongoose');
const models = require('./model');

let weather = models.weather;
let db = mongoose.connection;

if (db.readyState === 0){
    mongoose.connect('mongodb://localhost:27017/weather',{ useNewUrlParser: true });
    db.on('error', console.error.bind(console, 'connection error'));
    db.on('open',()=>{console.log("DB Read Opened!")});
    db.on('close', ()=>{console.log("DB Read Closed!")});    
}

const findOne = (city) => {
    if (db.readyState === 0){
        mongoose.connect('mongodb://localhost:27017/weather',{ useNewUrlParser: true });
    }

    return weather.find({'_id':city}, {"__v":0, "_id":0, "data._id":0});
}

module.exports = findOne;