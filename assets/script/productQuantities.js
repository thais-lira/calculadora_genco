// Object containing product quantities information
const productQuantities = {
  'clarificante': { min: 3, max: 6, unit: 'ML', factor: 1000 },
  'algicida_choque': { min: 5, max: 7, unit: 'ML', factor: 1000 },
  'algicida_manutencao': { min: 3, max: 5, unit: 'ML', factor: 1000 },
  'algicida_cobre': { min: 20, max: 30, unit: 'ML', factor: 1000 },
  'sulfato_aluminio': { min: 20, max: 40, unit: 'G', factor: 1000 },
  'cloro_granulado': { min: 3, max: 5, unit: 'G', factor: 1000 },
  'cloro_estabilizado': { min: 2, max: 3, unit: 'G', factor: 1000 },
  'cloro_poll-trat': { min: 3, max: 6, unit: 'G', factor: 1000 },
  'ph_granulado': { min: 3, max: 6, unit: 'G', factor: 1000 },
  'ph_mais-granulado': { min: 10, max: 40, unit: 'ML', factor: 1000 },
  'ph_menos-liquido': { min: 10, max: 20, unit: 'ML', factor: 1000 },
  'ph_mais-liquido': { min: 10, max: 20, unit: 'ML', factor: 1000 }
};

// Function to calculate and display product quantities based on user input
function calculateProducts() {
  // Get the selected product and pool size
  const selectedProduct = document.getElementById('select_products').value;
  const poolSize = parseFloat(document.getElementById('pool_size').value);

  // Get product information
  const productInfo = productQuantities[selectedProduct];

  if (productInfo) {
    // Calculate the minimum and maximum quantity based on pool size
    const minQuantity = productInfo.min * poolSize / productInfo.factor;
    const maxQuantity = productInfo.max * poolSize / productInfo.factor;

    // Display the calculated quantities
    document.getElementById("quantity_of_products--min").innerHTML = `Dosagem mínima: ${minQuantity.toFixed(2)} ${productInfo.unit} (M³)`;
    document.getElementById("quantity_of_products--max").innerHTML = `Dosagem máxima: ${maxQuantity.toFixed(2)} ${productInfo.unit} (M³)`;

    // Clear input fields to make the user's next input easier
    document.getElementById('select_products').value = '';
    document.getElementById('pool_size').value = '';

    // Focus on selection field for next entry
    document.getElementById('select_products').focus();

  } else {
    // Product not found in the information
    alert("Produto não encontrado nas informações.");
  }
}