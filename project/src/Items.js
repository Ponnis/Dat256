const items=[{"name":"Tomatoes", "price":10},{"name":"eggs","price":14}];

function getItemByName(name){
    let i;
    items.forEach(item => {
        if(item.name === name){
            i = item
        }
    });
    return i;
};

module.exports.getItemByName = getItemByName;