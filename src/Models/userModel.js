import mongoose from 'mongoose'
import userSchema from '../src/Schemas/user.js'


// Created userModel based off of userSchema from Schemas/user.js

const userModel = mongoose.model('User', userSchema);

export default userModel;

