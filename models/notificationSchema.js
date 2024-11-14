import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    referenceNo: { type: String, required: true, unique: true },
    eventName: { type: String, required: true }
});

const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;
