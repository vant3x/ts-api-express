import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const CarSchema = new Schema<Car>({
        brand: {
          type: String,
          required: true
        },
        model: {
          type: String,
          required: true
        },
        year: {
          type: Number,
          required: true
        },
        price: {
          type: Number
        },
        image: {
          type: String,
          required: false
        },
        description: {
          type: String
        },
        entryDate: {
          type: Date,
          required: true,
          default: Date.now()
        },
        mileage: {
          type: Number
        },
        gas: {
          type: String,
          enum: ["gasoline", "electric"]
        },
        state: {
          type: Boolean
        }
    },
    {
        timestamps: true,
        versionKey: false
});

const CarModel = model("cars", CarSchema);
export default CarModel;