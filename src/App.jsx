import  { useState } from 'react';
import Car from '/src/components/car';
import Motorcycle from '/src/components/motorcycle';
import VehicleDisplay from '/src/components/vehicleDisplay';



function App() {
  const [savedData, setSavedData] = useState(null)
  const [formData, setFormData] = useState({
    model: '',
    yearManufacture: '',
    quantityDoors: '',
    brand: '',
    passengers: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleSave = (vehicleType) => {
    try {
      let vehicle;
      if (vehicleType === 'car') {
        vehicle = new Car(formData.model, formData.yearManufacture, formData.quantityDoors, formData.brand);
      } else if (vehicleType === 'motorcycle') {
        vehicle = new Motorcycle(formData.model, formData.yearManufacture, formData.brand, formData.passengers);
      } else {
        throw new Error('Tipo de veículo inválido');
      }

      // Salvar os dados em um arquivo JSON
      const jsonData = JSON.stringify(vehicle, null, 2);
      console.log(jsonData);
      setSavedData(JSON.parse(jsonData));
    } catch (error) {
      console.error('Erro:', error.message);
    }
  }

  return (
    <div>
      <label>
        Modelo:
        <input type="text" name="model" onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Ano de Fabricação:
        <input type="text" name="yearManufacture" onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Quantidade de Portas (ou Rodas para Moto):
        <input type="text" name="quantityDoors" onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Marca:
        <input type="text" name="brand" onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Passageiros (apenas para Moto):
        <input type="text" name="passengers" onChange={handleInputChange} />
      </label>
      <br />

      <button onClick={() => handleSave('car')}>Salvar Carro</button>
      <button onClick={() => handleSave('motorcycle')}>Salvar Moto</button>
      {/* Exibi os dados salvos se houver dados para exibir */}
      {savedData && <VehicleDisplay savedData={savedData} />}
    </div>
  )
}

export default App