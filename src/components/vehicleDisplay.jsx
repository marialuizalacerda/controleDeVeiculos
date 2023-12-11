import PropTypes from 'prop-types';

const styles = {
  container: {
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  heading: {
    fontSize: '20px',
    marginBottom: '8px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '8px',
  },
}

function VehicleDisplay({ savedData }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dados salvos do veículo:</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Modelo: {savedData.model}</li>
        <li style={styles.listItem}>Ano de fabricação: {savedData.yearManufacture}</li>
        {savedData.quantityDoors && (
          <li style={styles.listItem}>Quantidade de Portas: {savedData.quantityDoors}</li>
        )}
        {savedData.brand && <li style={styles.listItem}>Marca: {savedData.brand}</li>}
        {savedData.wheels && <li style={styles.listItem}>Rodas: {savedData.wheels}</li>}
        {savedData.passengers && (
          <li style={styles.listItem}>Passageiros: {savedData.passengers}</li>
        )}
      </ul>
    </div>
  )
}

VehicleDisplay.propTypes = {
  savedData: PropTypes.object.isRequired, 
}

export default VehicleDisplay