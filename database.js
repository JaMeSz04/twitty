var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('twitty-db.db');


module.exports = {
  
 register : function (username,password,name,email){
    console.log("username : " + username);
    var query = "INSERT INTO USERLIST(username,password,name,email) VALUES ('" + username + "','" + password + "','" + name + "','" + email +"')" ;
    db.run(query, function (error){
        if (error){
            console.log(error);
            return null;
        }
    });

    return 1;
},

    login : function (username, password){
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
    },

    getFollowers : function (username){
        var query = "SELECT * from FOLLOWING_LIST WHERE username = '" + username + "'";
        db.all(query, function(error, rows){
            if (error){
                return null;
            }
            console.log("rows : " );
            console.dir(rows);
            return rows;
        })
    }
};

//register("JaMeSz04", "Beareater05", "ShubU", "jame.beareater@gmail.com");
//login("JaMeSz04", "Beareater05");