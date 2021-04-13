const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const imageSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true },
    title: {type: String},
    descripcion:{type: String},
    filename:{type:String},
    originalname:{type:String},
    mimetype:{type:String},
    size: {type:Number},
    create_at:{type:Date, default: Date.now()}
});

const itemModel = mongoose.model("Image", imageSchema);

module.exports = itemModel;
