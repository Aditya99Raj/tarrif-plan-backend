const  mongoose  = require("mongoose");

const connect = () => {
	return mongoose.connect(
		"mongodb+srv://aa:aa@cluster0.gbsl7.mongodb.net/?retryWrites=true&w=majority"
	);
};

module.exports = { connect };