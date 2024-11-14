import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    photo: { type: String } // File path or URL
});

const User = mongoose.model('User', userSchema);
export default User;