 const {Schema, default: mongoose } = require("mongoose");
const course = require("./Routes/course");
 const ObjectId = mongoose.Types.ObjectId;
 

 const userSchema =  new Schema({
    email: { type: String, unqiue: true},
    password: String,
    firstName: String,
    lastName: String
 });

 const adminSchma =  new Schema({
    email: { type: String, unqiue: true},
    password: String,
    firstName: String,
    lastName: String

 });
 const courseSchma =  new Schema({
    title: String,
    description: String,
    imageUrl: String,
    price: Number,
    createId: ObjectId

 });

 const purchaseSchma = new Schema({
    userId: ObjectId,
    courseId: ObjectId

 });

 const userModel = mongoose.model("user", userSchema);
 const adminModel = mongoose.model("admin", adminSchma);
 const courseModel = mongoose.model("course", courseSchma);
 const purchaseModel = mongoose.model("purchase", purchaseSchma);


 module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
 }
