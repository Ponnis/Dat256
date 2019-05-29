//generates SKU to new products added to inventory
var sku = 0

export function getNewSKU() {
    let newSKU = ++sku;
    return newSKU;
};

