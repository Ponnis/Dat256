/**
 * "farmers" contains all farmers and the information about them.
 * A farmer consits of a unique ID, name, distance and description.
 */
const farmers = [{
    "id": 0,
    "name": "Bästa bondgården",
    "distance": 15,
    "rating": 2,
    "types": [
        "egg",
        "sheep",
        "fish"
    ],
    "description": "Det här är den absolut bästa bondgården. Alla våra produkter är ekologiska och riktigt goda.",
    "products": [
        { "name": "Tomat", "price": 8,"sku":"0-0" },
        { "name": "Vitlök", "price": 2, "sku":"0-1" }
    ],
    "orders":[

    ]
},
{
    "id": 1,
    "name": "Djurens bondgård",
    "distance": 27,
    "rating": 4,
    "types": [
        "bread",
        "meat",
        "milk",
        "fruit"
    ],
    "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm.",
    "products": [
        { "name": "Potatis", "price": 10,"sku":"1-0" },
        { "name": "Ägg", "price": 14,"sku":"1-1" }
    ],
    "orders":[

    ]
},
{
    "id": 2,
    "name": "Ellens bondgård",
    "distance": 30,
    "rating": 5,
    "types": [
        "bread",
        "fruit"
    ],
    "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm.",
    "products": [
        { "name": "Bröd", "price": 25,"sku":"2-0" },
        { "name": "Muffins", "price": 7,"sku":"2-1" },
        { "name": "Äpplen", "price": 3,"sku":"2-2" }
    ],
    "orders":[

    ]
},
{
    "id": 3,
    "name": "Henriks bondgård",
    "distance": 5,
    "rating": 5,
    "types": [
        "meat",
        "milk"
    ],
    "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm.",
    "products": [
        { "name": "Fläskfilé", "price": 100,"sku":"3-0" },
        { "name": "Oxfilé", "price": 400, "sku":"3-1" },
        { "name": "Mjölk", "price": 12,"sku":"3-2" }
    ],
    "orders":[

    ]
},
{
    "id": 4,
    "name": "Göteborgs fårfarm",
    "distance": 12,
    "rating": 1,
    "types": [
         "sheep"
    ],
    "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm.",
    "products": [
        { "name": "Lamm", "price": 300,"sku":"4-0" }
    ],
    "orders":[

    ]
},
];


/**
 * Finds and returns a farmer by using their unique id.
 * @param {Farmer's id} id 
 */
function getFarmerById(id) {
    let f;
    farmers.forEach(farmer => {
        if (farmer.id === id) {
            f = farmer
        }
    });
    return f;
};

/**
 * Returns amount of connected farmers.
 */
function getAmountOfFarmers() {
    const lists = [];
    for (var i = 0; i < farmers.length; i++) {
        lists.push(i);
    }
    return lists;
}

function getNewID(){
    return getAmountOfFarmers().length;
}

function addFarmer(farmerObject){
    farmers.push(farmerObject)
    console.log(JSON.stringify(farmers))
}

function getSKU(id){
    let newSKU = ""+id+"-"+(farmers[id].products.length)
    console.log(newSKU)
    return newSKU
}

function addOrder(product){
    farmers[product.id[0]].orders.push(product)
    console.log(JSON.stringify(farmers[product.id[0]].orders))
}

module.exports.getFarmerById = getFarmerById;
module.exports.getAmountOfFarmers = getAmountOfFarmers;
module.exports.addFarmer = addFarmer;
module.exports.getNewID = getNewID;
module.exports.getSKU = getSKU;
module.exports.addOrder = addOrder;