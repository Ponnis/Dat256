const TestAccounts = [
    {
        "accountOption":"costumer","username":"test1","password":"pass","firstName":"Olga","surName":"B","email":"a@a"
    },
    {
        "accountOption":"producer","username":"0","password":"0","firstName":"Lars","surName":"A","email":"b@b"
    },
    {
        "accountOption":"producer","username":"1","password":"1","firstName":"Lars","surName":"A","email":"b@b"
    },
    {
        "accountOption":"producer","username":"2","password":"2","firstName":"Lars","surName":"A","email":"b@b"
    },
    {
        "accountOption":"producer","username":"3","password":"3","firstName":"Lars","surName":"A","email":"b@b"
    },
    {
        "accountOption":"producer","username":"4","password":"4","firstName":"Lars","surName":"A","email":"b@b"
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

function getAccounts() {
    return TestAccounts
}

module.exports.checkLogin = checkLogin;
module.exports.getAccounts = getAccounts;
