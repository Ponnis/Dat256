/**
 * "farmers" contains all farmers and the information about them.
 * A farmer consits of a unique ID, name, distance and description.
 */
const farmers = [{"id": 0, 
                "name": "Bästa bondgården", 
                "distance": 15, 
                "rating": "two",
                "types": [
                    {"type": "egg"},
                    {"type": "sheep"},
                    {"type": "fish"}
                ],
                "description": "Det här är den absolut bästa bondgården. Alla våra produkter är ekologiska och riktigt goda.",
                "products": [
                    {"name":"Tomatoes", "price":8},
                    {"name":"Garlic","price":2}
                ]
            },
                {"id": 1, 
                "name": "Djurens bondgård", 
                "distance": 27, 
                "rating": "five",
                "types": [
                    {"type": "bread"},
                    {"type": "meat"},
                    {"type": "milk"},
                    {"type": "fruit"}
                ],
                "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm.",
                "products": [
                    {"name":"Potatoes", "price":10},
                    {"name":"Eggs","price":14}
                ]
            },
            ];


/**
 * Finds and returns a farmer by using their unique id.
 * @param {Farmer's id} id 
 */
function getFarmerById(id){
    let f;
    farmers.forEach(farmer => {
        if(farmer.id === id){
            f = farmer
        }
    });
    return f;
};

module.exports.getFarmerById = getFarmerById;