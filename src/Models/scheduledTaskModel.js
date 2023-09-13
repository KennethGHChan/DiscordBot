import mongoose from 'mongoose'
import scheduledTask from '../Schemas/scheduledTask.js';

// Created scheduledModel based on Schema from Shemas/scheduled.js

const scheduledModel = mongoose.model('ScheduledTask', scheduledTask);
