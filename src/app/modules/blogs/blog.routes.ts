import express from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { Blog } from "./blog.model";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await Blog.create(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Blog Created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await Blog.find();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Blog retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Blog.findByIdAndDelete(id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Blog deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

export const BlogRoutes = router;
