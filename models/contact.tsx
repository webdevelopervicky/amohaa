import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  number: String,
  subject: String,
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
