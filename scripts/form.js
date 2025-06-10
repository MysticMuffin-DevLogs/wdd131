const productSelect = document.getElementById("product");

const products = [
  { id: "p001", name: "Widget Master 3000" },
  { id: "p002", name: "Gadget Pro X" },
  { id: "p003", name: "Device Elite" },
];

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
