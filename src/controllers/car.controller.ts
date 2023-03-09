import { Request, Response, NextFunction } from "express";
import { newCar, getCarById, getAllCars, updateCarById, deleteCarById } from "../services/car.service";
import { handleHttp } from "../utils/error.handle";

const getCar = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getCarById(id);
        const data = response ? response : {msg: 'NOT FOUND'};
        res.json(data);
    } catch (error) {
       handleHttp(res, 'ERROR_GET_CAR', error);
       console.log(error)
    }
}

const getCars = async (req: Request, res: Response) => {
    try {
        const response = await getAllCars()
        res.json(response);

    } catch (error) {
       handleHttp(res, 'ERROR_GET_CARS', error);
    }
}

const createCar = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const responseCar = await newCar(req.body);
        res.json(responseCar);
    } catch (error) {
        console.log(error)

       handleHttp(res, 'ERROR_CREATE_CAR', error);
    }
}

const updateCar = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await updateCarById(id, req.body);
        res.json(response);
    } catch (error) {
       handleHttp(res, 'ERROR_UPDATE_CAR', error);
    }
}

const deleteCar = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteCarById(id);
        res.json(response);
    } catch (error) {
       handleHttp(res, 'ERROR_DELETE_CAR', error);
    }
}

export { getCar, getCars, createCar, updateCar, deleteCar };