import express from "express";
import { UserRoutes } from "../modules/users/user.routes";
import { BlogRoutes } from "../modules/blogs/blog.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
