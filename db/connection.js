import mongoose from 'mongoose';

const connectionString = process.env.DB_URL || "mongodb://127.0.0.1:27017/tedlassoapi"

mongoose.set("returnOriginal", false);

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => console.log("Connected to database"));
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"));
mongoose.connection.on('error', error => console.error("Database error", error));

export default mongoose.connection