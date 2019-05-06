/**
 * "farmers" contains all farmers and the information about them.
 * A farmer consits of a unique ID, name, distance and description.
 */
const farmers = [{
    "id": 0,
    "name": "Bästa bondgården",
    "distance": 15,
    "rating": "two",
    "types": [
        { "type": "egg" },
        { "type": "sheep" },
        { "type": "fish" }
    ],
    "description": "Det här är den absolut bästa bondgården. Alla våra produkter är ekologiska och riktigt goda.",
    "products": [
        { "name": "Tomatoes", "price": 8 },
        { "name": "Garlic", "price": 2 }
    ]
},
{
    "id": 1,
    "name": "Djurens bondgård",
    "distance": 27,
    "rating": "five",
    "types": [
        { "type": "bread" },
        { "type": "meat" },
        { "type": "milk" },
        { "type": "fruit" }
    ],
    "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm.",
    "products": [
        { "name": "Potatoes", "price": 10 },
        { "name": "Eggs", "price": 14 }
    ]
},
{
    "id": 2,
    "name": "Ellens bondgård",
    "distance": 27,
    "rating": "five",
    "types": [
        { "type": "bread" },
        { "type": "fruit" }
    ],
    "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm.",
    "products": [
        { "name": "Bröd", "price": 25 },
        { "name": "Muffins", "price": 7 },
        { "name": "Äpplen", "price": 3 }
    ]
},
{
    "id": 3,
    "name": "Henriks bondgård",
    "distance": 27,
    "rating": "four",
    "types": [
        { "type": "meat" },
        { "type": "milk" }
    ],
    "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm.",
    "products": [
        { "name": "Fläskfilé", "price": 100 },
        { "name": "Oxfilé", "price": 400 },
        { "name": "Mjölk", "price": 12 }
    ]
},
{
    "id": 4,
    "name": "Göteborgs fårfarm",
    "distance": 27,
    "rating": "one",
    "types": [
        { "type": "sheep" }
    ],
    "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm.",
    "products": [
        { "name": "Lamm", "price": 300 }
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

module.exports.getFarmerById = getFarmerById;
module.exports.getAmountOfFarmers = getAmountOfFarmers;