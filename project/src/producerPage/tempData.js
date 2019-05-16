var sku = 0

export function getNewSKU() {
    let newSKU = ++sku;
    return sku;
};

