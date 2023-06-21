import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();
// use cors middleware
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  // interface
  interface Iuser {
    id: string;
    role: string;
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  //schema
  const userSchema = new Schema<Iuser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },
    gender: { type: String, enum: ["male", "female"], required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true, unique: true },
    emergencyContactNo: { type: String, required: true, unique: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });

  // model
  const User = model<Iuser>("User", userSchema);

  const createUser = async (): Promise<void> => {
    // create user
    const user = new User({
      id: "1230",
      role: "admin",
      password: "123",
      name: {
        firstName: "Johnx",
        middleName: "Doe",
        lastName: "Doe",
      },
      gender: "male",
      email: "john@gmail1.com",
      contactNo: "12345678901",
      emergencyContactNo: "12345678901",
      presentAddress: "Dhaka",
      permanentAddress: "Dhaka",
    });

    await user.save();
  };

  createUser();

  res.send("Hello World!");
});

export default app;
