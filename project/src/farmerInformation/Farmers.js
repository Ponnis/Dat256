/**
 * "farmers" contains all farmers and the information about them.
 * A farmer consits of a unique ID, name, distance and description.
 */
const farmers = [{"id": 0, 
                "name": "Bästa bondgården", 
                "distance": 15, 
                "description": "Det här är den absolut bästa bondgården. Alla våra produkter är ekologiska och riktigt goda."},
                {"id": 1, 
                "name": "Djurens bondgård", 
                "distance": 27, 
                "description": "Det här är en bondgård där fokus ligger på att djuren ska må bra. Vi säljer ekologiskt kött från gris och lamm."}
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