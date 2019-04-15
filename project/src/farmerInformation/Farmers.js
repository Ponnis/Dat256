const farmers = [{"id": 0, 
                "name": "Bästa bondgården", 
                "distance": 15, 
                "description": "Det här är den absolut bästa bondgården. Alla våra produkter är ekologiska och riktigt goda."}];


function getFarmerById(id){
    const f = farmers.map(farmer => {
        if(farmer.id === id){
            return farmer;
        }
    });
    return f;
};

module.exports.getFarmerById = getFarmerById;