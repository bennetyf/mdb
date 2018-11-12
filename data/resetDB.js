const mongoose = require('mongoose');
const async = require('async');
const models = require('./model');
const data = require('./current.json');

let weather = models.weather;
let db = mongoose.connection;

let opWriteDocs = [];
for(let i = 0; i < data.length; i++){
    opWriteDocs.push(new weather(data[data.citylist[i]]));
}



if (db.readyState === 0){
    mongoose.connect('mongodb://localhost:27017/weather',{ useNewUrlParser: true });
    db.on('error', console.error.bind(console, 'connection error'));
    db.on('open',()=>{console.log("DB Opened!")});
    db.on('close', ()=>{console.log("DB Closed!")});    
}

const deleteAll = () => {
    weather.deleteMany({},
        (err) => {
                   if(err) {console.error(err);}
                   else {console.log("All Docs Deleted!");}});
};

const insertAll = () => {
    for (let entry of opWriteDocs){
        entry.save((err)=>{if(err){console.error(err);} else{console.log("Doc Inserted!")}})
    }
};

const reset = async () => {
    await deleteAll();
    await insertAll();
};

module.exports = reset;