import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import { connectToDatabase } from '../database.js'; // Import your database connection function
import { createUserID, getUserID, updateUserID, deleteUserID } from '../Controller/userController.js';

// Testing the CRUD operations that were created

// npx mocha tests 

// Configure Chai
chai.use(chaiHttp);
const expect = chai.expect;

describe('User Controller and CRUD Operations', () => {
  // Establish a connection to the test database before running the tests.
  before(async () => {
    try {
      await connectToDatabase(); // Use the imported connectToDatabase function
      console.log('Connected to the database!');
    } catch (error) {
      console.error('Database connection error:', error);
    }
  });

  // Define your test data
  const testUser = {
    userID: '123456789012345679',  // remember that '123456789012345679' and '123456789012345678 are now in the database'
    userName: 'testUser',
  };

  it('should create a new user', async () => {
    const newUser = await createUserID(testUser); // Use the imported function directly
    expect(newUser).to.be.an('object');
    expect(newUser).to.have.property('userName', testUser.userName);
  });

  // After running the tests, close the database connection.
  after(async () => {
    await mongoose.connection.close();
    console.log('All tests completed successfully.'); // Display success message
  });
});
