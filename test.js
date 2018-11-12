const async = require('async');
const mongoose = require('mongoose');
// let task1 = (cb) => {console.log("Task1!");cb();};
// let task2 = () => {console.log("Task2!")};
// let task3 = () => {console.log("Task3!")};

// async.series([task1, task2, task3]);

const personSchema = new mongoose.Schema({
    name: {
        first:  {type: String, required: true, lowercase: true},
        last:   {type: String, required: true, lowercase: true}
    },
    occupation: String,
    age: Number,
    gender: String
});
personSchema.virtual('fullname').get(function(){return this.name.first +' '+ this.name.last;});

const personModel = mongoose.model("personModel",personSchema);

let james = new personModel({
    name:{first: "James", last: "Bennett"},
    occupation: "Nurse",
    age: 25,
    gender: "Female"
});

// console.log(person.toJSON());

let db = mongoose.connection;

if (db.readyState === 0){
    mongoose.connect('mongodb://localhost:27017/person',{ useNewUrlParser: true });
    db.on('error', console.error.bind(console, 'connection error'));
    db.on('open',()=>{console.log("DB Opened!")});
    db.on('close', ()=>{console.log("DB Closed!")});    
}

const test = async () => {
    await james.save();
    await personModel.find({},(err,res)=>{console.log(res)});
    await personModel.findOneAndUpdate({"name.first":"James"},{"age": 30,"name.last":"Bond"});
    await personModel.find({},(err,res)=>{console.log(res)});
    db.close();
}
test();
// Promise(person.save()).then((res)=>personModel.find({})).then((res)=>{console.log(res);});