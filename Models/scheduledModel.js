import mongoose from 'mongoose'
import scheduled from './scheduled.js'

const scheduledModel = mongoose.model('ScheduledTask', scheduled);