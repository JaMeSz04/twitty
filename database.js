var sqlite = require('sqlite3').verbose();

var db = new sqlite.Database('twitty-db.db');


function register(username,password,name,email){
    var query = "INSERT INTO USERLIST(username,password,name,email) VALUES ('" + username + "','" + password + "','" + name + "','" + email +"')" ;
    db.run(query);
}

function login(username, password){
    var query = "SELECT * from USERLIST WHERE username = '" + username + "' AND password = '" + password + "'";
    db.all(query, function (error, rows){
        if (error){
            return null;
        }
        console.log("erorr : " + error);
        console.log("rows : " + rows);
        console.dir(rows);
        return rows;
    });
}


register("JaMeSz04", "Beareater05", "ShubU", "jame.beareater@gmail.com");
login("JaMeSz04", "Beareater05");