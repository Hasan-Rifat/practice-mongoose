import { Model } from "mongoose";

// interface
export interface IUser {
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

// static
interface UserModel extends Model<IUser> {
  myStaticMethod(): number;
}
// instance methods
export interface IuserMethods {
  fullName(): string;
}
