import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// database

async function DB(): Promise<void> {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/prentice-mongoose");

    console.log("connected to database successfully");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(`error connecting to database: ${error}`);
  }
}

DB();
