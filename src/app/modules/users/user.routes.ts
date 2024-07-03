import express from "express";
import { User } from "./user.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
    }

    if (user.password !== password) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Incorrect password!");
    }

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Login successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

export const UserRoutes = router;
