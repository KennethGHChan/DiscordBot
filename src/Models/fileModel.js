import mongoose from 'mongoose'
import file from '../Schemas/file.js';


// Creating fileModel based on fileSchema from Schemas/file.js

const fileModel = mongoose.model('File', file);
