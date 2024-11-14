import mongoose from 'mongoose';

const qaSchema = new mongoose.Schema({
    excelData: { type: Array, default: [] }, // Store Excel data as an array of objects
    questions: [
        {
            question: { type: String, required: true },
            voiceNote: { type: String }, // URL or file path
            contactPersonName: { type: String, required: true },
            contactNumber: { type: String, required: true }
        }
    ]
});

const QA = mongoose.model('QA', qaSchema);
export default QA;
