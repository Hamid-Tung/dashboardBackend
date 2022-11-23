import { Router } from "express";
import {
  findTags,
  affterMiddleware,
  thisKeyword,
  thiskey,
} from "../controller/practice.controller.js";
import { checkRequestHeader } from "../middlewares/chekHeader.middleware.js";

const router = Router();

router.post("/samplestring", findTags);
router.get("/checkFormat", checkRequestHeader, affterMiddleware);
router.get("/hy", thiskey);

export default router;
