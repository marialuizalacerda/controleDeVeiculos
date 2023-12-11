import { Vehicle } from "/src/components/vehicle";

export default class Motorcycle extends Vehicle {
  constructor(model, yearManufacture, brand, passengers) {
    super(model, yearManufacture, null, brand)
    this.wheels = 2
    this.passengers = passengers
    if (passengers < 1 || passengers > 2) {
      throw new Error('Quantidade de passageiros deve ser entre 1 e 2')
    }
  }
}
