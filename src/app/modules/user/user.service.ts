import { Iuser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (): Promise<Iuser> => {
  // create user
  const user = new User({
    id: "12300000",
    role: "admin",
    password: "123",
    name: {
      firstName: "Johnx",
      middleName: "Doe",
      lastName: "Doe",
    },
    gender: "male",
    email: "john@gmail11.com",
    contactNo: "12345678901",
    emergencyContactNo: "12345678901",
    presentAddress: "Dhaka",
    permanentAddress: "Dhaka",
  });

  await user.save();

  return user;
};
