var mongoose = require('mongoose'),
		profileSchema,
		profileModel;

profileSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String
});
