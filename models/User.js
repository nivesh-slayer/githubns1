const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  education: { type: String, required: false },
  resume: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);
