export interface Car {
    brand: string;
    model: string;
    entryDate: Date;
    year: number;
    description: string;
    mileage?: number;
    color: string;
    price: number;
    image: string;
    owner: string;
    phoneOwner?: number;
    addressOwner?: string;
    gas?: "gasoline" | "electric";
    state: boolean;
}