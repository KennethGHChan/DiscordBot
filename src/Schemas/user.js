/**
 * A database schema is a blueprint or structure that represents the logical configuration of all or part of a relational database. 
 * It defines how data is organized and how relationships between data are handled. 
 * In essence, a schema provides a visual representation of how different tables, views, stored procedures, and other database elements relate to each other.
 */

import mongoose from 'mongoose'


const userSchema = new mongoose.Schema( {
    userID: {type: String, required: true, unique: true},
    userName: { type: String, required: true},

});

export default userSchema;


