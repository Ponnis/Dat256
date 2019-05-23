const TestAccounts = [
    {
        "id":"0","accountOption":"producer","username":"0","password":"0","firstName":"Lars","surName":"A","email":"b@b"
    },
    {
        "id":"1","accountOption":"producer","username":"1","password":"1","firstName":"Lars","surName":"A","email":"b@b"
    },
    {
        "id":"2","accountOption":"producer","username":"2","password":"2","firstName":"Lars","surName":"A","email":"b@b"
    },
    {
        "id":"3","accountOption":"producer","username":"3","password":"3","firstName":"Lars","surName":"A","email":"b@b"
    },
    {
        "id":"4","accountOption":"producer","username":"4","password":"4","firstName":"Lars","surName":"A","email":"b@b"
    },
]

function checkLogin(username,password) {
    let check = false;
    TestAccounts.forEach(user => {
        //console.log(JSON.stringify(user))
            if((user.username === (""+username) && (user.password === (""+password)))){
                console.log(username, password);
                check = true;
            }
        }
    )
    return check;
}

function getID(){
    return TestAccounts.length
}

function getAccounts() {
    return TestAccounts
}

function getUserID(username){
    let id;
    TestAccounts.forEach(user=>{
        if(user.username === ""+username){
            console.log(username + ":" + user.username)
            id = user.id
        }
    })
    return id;
}

module.exports.checkLogin = checkLogin;
module.exports.getAccounts = getAccounts;
module.exports.getID = getID;
module.exports.getUserID = getUserID;
