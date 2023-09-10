import mongoose from 'mongoose'
import file from './file.js'

const fileModel = mongoose.model('File', file);