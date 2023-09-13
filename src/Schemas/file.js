import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({

    fileName: { type: String, required: true},
    fileType: { type: String, required: true},
    description: { type: String},
    uploadDate: { type: Date, default: Date.now},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},


});

export default mongoose.model('File', fileSchema);
//