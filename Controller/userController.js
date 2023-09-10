import userModel from '../Models/userModel.js';


// Creating crud operations

// Create

export const createUserID = async (userData) => {
    try {
        const user = new userModel(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error (" Error creating user: " + error.message);
    }
}

// Retrieve

export const getUserID = async (userID) => {
    try {
        const user = await userModel.findOne ({ userID });
        return user;
    } catch (error) {
        throw new Error("Error retrieving user: " + error.message);
    }
}

// Update

export const updateUserID = async (userID, newData) => {
    try {
        const user = await userModel.findOneAndUpdate ({ userID}, newData, { new: true});
        return user;
    }catch (error) {
        throw new Error("Error updating user: " + error.message);
    }
} 

// Delete

export const deleteUserID = async (userID) => {
    try {
        const user = await userModel.findOneAndDelete ({ userID });
        return user;
    } catch (error) {
        throw new Error("Error deleting user:  " + error.message);
    }
}


