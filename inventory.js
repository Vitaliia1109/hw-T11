// Object constructor function for Shoes
function Shoes(name, productCode, quantity, valuePerItem) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
}

// Array to store instances of Shoes
let shoesArray = [];

// Creating five instances of Shoes and pushing them to the array
shoesArray.push(new Shoes("Nike", "123456", 10, 450));
shoesArray.push(new Shoes("Adidas", "654321", 15, 180));
shoesArray.push(new Shoes("Puma", "876543", 20, 200));
shoesArray.push(new Shoes("Reebok", "987654", 25, 150));
shoesArray.push(new Shoes("Under Armour", "101010", 30, 300));
    
// Function to search for a shoe within the array
function searchForShoe(productCode) {

    let findShoe = shoesArray.find(shoe => shoe.productCode === productCode);
    if (findShoe) {
        console.log("\Found shoe")
        console.table(findShoe);
    }
    else {
        console.log("Shoe not found");
    }
}

// A function to find the shoe with the lowest value per item.
function findLowestValuePerItem() {
    let lowestValuePerItem = shoesArray.reduce((prev, current) => {
        if (prev.valuePerItem < current.valuePerItem) {
            return prev;
        }
        else {
            return current;
        }
    });
    console.log("Shoe with lowest value per item is:"),
    console.table(lowestValuePerItem);
}

// A function to find the shoe with the highest value per item.
function findHighestValuePerItem() {
    let highestValuePerItem = shoesArray.reduce((prev, current) => {
        if (prev.valuePerItem > current.valuePerItem) {
            return prev;
        }
        else {
            return current;
        }
    });
    console.log("Shoe with highest value per item is:"),
    console.table(highestValuePerItem);
}
 
// A function to edit all four properties for each of the five shoe instances.
function editAllShoeProperties(name, productCode, quantity, valuePerItem) {
  shoesArray.forEach(shoe => {
        shoe.name = name;
        shoe.productCode = productCode;
        shoe.quantity = quantity;
        shoe.valuePerItem = valuePerItem;
  });
    console.table(shoesArray);
    
}


// A function to order all the objects in ascending order based on the “Value per item” property.
function orderShoesByValuePerItem() {
    let shoesArraySorted = shoesArray.sort((a, b) => a.valuePerItem - b.valuePerItem);
    console.table(shoesArraySorted);
}



// Example usage of functions
searchForShoe("876543");
findLowestValuePerItem();
findHighestValuePerItem();
orderShoesByValuePerItem();
editAllShoeProperties("New Balance", "459862", 35, 600);