const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let weatherSchema = new Schema({
    _id: String,
    data: [
            {
                app_temp:  Number, 
                city_name: String, 
                datetime:  String, 
                weather:   {description: String}
            }
        ]
});

module.exports = { weather: mongoose.model("weather", weatherSchema)};