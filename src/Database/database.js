import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const DatabaseAddress = process.env.MONGOOSE_ID;


async function connectToDatabase() {
    try {
      await mongoose.connect(DatabaseAddress, {
        
      });
  
      console.log('Connected to the database!');
    } catch (error) {
      console.error('Database connection error:', error);
    }
  }
  
export { connectToDatabase };