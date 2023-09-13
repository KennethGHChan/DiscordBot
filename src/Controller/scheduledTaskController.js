import scheduledTaskModel from '../models/scheduledTaskModel.js';


// Create

export const createScheduledTask = async ( taskData ) => {
    try {
        const task = new scheduledTaskModel( taskData );
        await task.save();
        return task;
    } catch (error) {
        throw new Error (" Error creating task: " + error.message);
    }
}

// Retrieve

export const retrieveScheduledTask = async (taskData ) => {
    try {
        const task = await scheduledTaskModel.findOne( taskData );
        return task;
    } catch (error) {
        throw new Error (" Error retrieving task" + error.message);
    }
}

// Update

export const updateScheduledTask = async (taskData, newTaskData) => {
    try {
        const updatedTask = await scheduledTaskModel.findOneAndUpdate(taskData, newTaskData, { new: true });
        return updatedTask;
    } catch (error) {
        throw new Error("Error updating task: " + error.message);
    }
};

// Delete (findOneAndDelete)

export const deleteScheduledTask = async (taskData) => {
    try {
        const task = await scheduledTaskModel.findOneAndDelete ( taskData );
        return task;
    } catch (error) {
        throw new Error("Error deleting task:  " + error.message);
    }
}