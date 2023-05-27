import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express()

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());
const mongoURI = "mongodb+srv://cshashank899:4PqmxLqHApmJzdFn@betaproject.3zayq5h.mongodb.net/?retryWrites=true&w=majority";



mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB!");
  });

  app.listen(9002, () => { 
    console.log("Server is listening on port 9002");
  });
  