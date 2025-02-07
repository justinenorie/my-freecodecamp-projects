const inventory = []

const findProductIndex = (name) => {
  const lowerCase = name.toLowerCase();
  return inventory.findIndex((item) => item.name.toLowerCase() === lowerCase);
}

const addProduct = ({ name, quantity }) => {
  const lowerCase = name.toLowerCase();
  const productIndex = findProductIndex(name);

  if (productIndex !== -1) {
    inventory[productIndex].quantity += quantity;
    console.log(`${lowerCase} quantity updated`);
  } else {
    inventory.push({ name: lowerCase, quantity: quantity });
    console.log(`${lowerCase} added to inventory`);
  }
}

const removeProduct = (name, quantity) => {
  const lowerCase = name.toLowerCase();
  const productIndex = findProductIndex(name);
  if (productIndex !== -1) {
    if (inventory[productIndex].quantity - quantity <= 0) {
      console.log(`Not enough ${lowerCase} available, remaining pieces: ${inventory[productIndex].quantity}`);
      inventory.splice(productIndex, 1);
    } else {
      inventory[productIndex].quantity -= quantity;
      console.log(`Remaining ${lowerCase} pieces: ${inventory[productIndex].quantity}`);
    }

  } else {
    console.log(`${lowerCase} not found`);
  }
}

addProduct({ name: "FLOUR", quantity: 1 });
addProduct({ name: "FLOUR", quantity: 19 });

removeProduct("FLOUR", 5);

console.log(findProductIndex("ayeu"))

console.log(inventory);


