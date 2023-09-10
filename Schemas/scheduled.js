import mongoose from 'mongoose'

const scheduledTaskSchema = new mongoose.Schema ({
    title: { type: String, required: true},
    description: { type: String},
    scheduledDateTime: { type: Date, required: true},
    file: { type: mongoose.Schema.Types.ObjectId, ref: 'File'},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},

})

export default mongoose.model('ScheduledTask', scheduledTaskSchema);
//