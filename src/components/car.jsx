import { Vehicle } from "/src/components/vehicle";

export default class Car extends Vehicle {
  constructor(model, yearManufacture, quantityDoors, brand) {
    super(model, yearManufacture, quantityDoors, brand)
    if (quantityDoors < 2 || quantityDoors > 4) {
      throw new Error('Quantidade de portas deve ser entre 2 e 4')
    }
  }
}