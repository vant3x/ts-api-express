import CarModel from "../models/Car";
import { Car } from './../interfaces/car.interface';

const newCar = async (car: Car) => {
    const responseNew = await CarModel.create(car);
    return responseNew;
};

const getCarById = async (id: string) => {
    const responseCar = await CarModel.findOne({_id: id});
    return responseCar;
}

const getAllCars = async () => {
    const responseCar = await CarModel.find({});
    return responseCar;
}

const updateCarById = async (id: string, data: Car) => {
    const responseCar = await CarModel.findOneAndUpdate({_id: id}, data, {
        new: true
    });
    return responseCar;
}


const deleteCarById = async (id: string) => {
    const responseCar = await CarModel.remove({_id: id});
    return responseCar;
}

export { newCar, getCarById, getAllCars, updateCarById, deleteCarById };
