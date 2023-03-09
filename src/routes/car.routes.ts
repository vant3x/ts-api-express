import { Router, Request, Response } from "express";
import { getCar, getCars, createCar, updateCar, deleteCar } from "../controllers/car.controller";

const router = Router();
/**
 * http://localhost:3000/car [GET]
 */

router.get('/', getCars);
router.get('/:id', getCar);
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export { router }       