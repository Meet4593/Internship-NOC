const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { ROLES } = require('../config/roles');

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true, lowercase: true, index: true },
		passwordHash: { type: String, required: true },
		role: { type: String, enum: Object.values(ROLES), required: true },
	},
	{ timestamps: true }
);

userSchema.methods.validatePassword = function (password) {
	return bcrypt.compare(password, this.passwordHash);
};

userSchema.statics.hashPassword = async function (password) {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
};

module.exports = mongoose.model('User', userSchema);

