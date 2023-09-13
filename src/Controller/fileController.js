import fileModel from '../Models/fileModel.js';


// Importing the fileModel from Models/fileModels.js abd creating basic crud operations

// ({}) this is only needed if i only had the data, the braces would create an object with the data
// However, im going to retrieve the information and create an object with the information and pass the object as an argument, so i wont need {}

// Create

export const createFile = async ( fileData ) => {
    try {
        const file = new fileModel( fileData );
        await file.save();
        return file;
    } catch (error) {
        throw new Error (" Error creating file: " + error.message);
    }
}

// Retrieve

export const retrieveFile = async (fileData ) => {
    try {
        const file = await fileModel.findOne( fileData );
        return file;
    } catch (error) {
        throw new Error (" Error retrieving file" + error.message);
    }
}

// Update

export const updateFile = async (fileData, newFileData) => {
    try {
        const updatedFile = await fileModel.findOneAndUpdate(fileData, newFileData, { new: true });
        return updatedFile;
    } catch (error) {
        throw new Error("Error updating file: " + error.message);
    }
};

// Delete (findOneAndDelete)

export const deleteFile = async (fileData) => {
    try {
        const file = await fileModel.findOneAndDelete ( fileData );
        return file;
    } catch (error) {
        throw new Error("Error deleting file:  " + error.message);
    }
}