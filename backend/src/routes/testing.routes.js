import express from 'express';
import {validateSaveTesting} from "../middlewares/validateTesting.js";
import {testingSave, getTestingAll}  from "../controllers/testing.controller.js";

const router = express.Router();

router.post("/", validateSaveTesting, testingSave);
router.get("/", getTestingAll);

export default router;