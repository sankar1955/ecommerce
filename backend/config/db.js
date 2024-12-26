import mongoose from 'mongoose';
const uri = "mongodb+srv://sankar:IFxLJuuImA8r9F07@cluster0.hbi40.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri);
    // console.log(
    //   `MongoDB connected successfully on host: ${connection.connection.host}, database: ${connection.connection.db.databaseName}`
    // );
    return connection;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
