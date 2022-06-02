const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

 const userSchema = new mongoose.Schema({
     name:{type:String, required:true},
     email:{type:String, required:true},
     phone:{type:Number, required:true},
     password:{type:String, required:true}
 },
 {
     timestamps:true,
     versionKey:false
 });

 userSchema.pre("save", function (next) {
	if (!this.isModified("password")) return next();

	var hash = bcrypt.hashSync(this.password, 6);

	this.password = hash;

	return next();
});

userSchema.methods.checkPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

 const user =  mongoose.model("user",userSchema);
 module.exports = {user}