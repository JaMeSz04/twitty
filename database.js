var sqlite = require('sqlite3').verbose();

var db = new sqlite.Database('twitty-db.db');


function register(username,password,name,email){
    var query = "INSERT INTO USERLIST(username,password,name,email) VALUES ('" + username + "','" + password + "','" + name + "','" + email +"')" ;
    db.run(query);
}

function login(username, password){
    var query = "SELECT * from USERLIST WHERE username = '" + username + "'";
    db.all(query, function (error, rows){
        console.log("erorr : " + error);
        console.log("rows : " + rows);;
        console.dir(rows);
    });
}


register("JaMeSz04", "Beareater05", "ShubU", "jame.beareater@gmail.com");
login("JaMeSz04", "Beareater05");