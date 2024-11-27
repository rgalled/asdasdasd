const mongoose = require('mongoose');

const messageScheme = new mongoose.Schema(
    {
        message_text:{
            type: String,
            require: true
        },
        id:{
            type: Number,
            require:true
        }
    }
)

module.exports = mongoose.model('datas', messageScheme)