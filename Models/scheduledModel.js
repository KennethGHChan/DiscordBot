import mongoose from 'mongoose'
import scheduled from './scheduled.js'

// Created scheduledModel based on Schema from Shemas/scheduled.js

const scheduledModel = mongoose.model('ScheduledTask', scheduled);
