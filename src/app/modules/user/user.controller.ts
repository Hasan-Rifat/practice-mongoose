import e, { Request, Response } from "express";
import { createUserToDb } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserToDb();
    res.status(200).json({
      message: "user created successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "error creating user",
      error: error,
    });
  }
};
