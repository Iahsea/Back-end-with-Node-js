const connection = require('../config/database');


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send("check ABC")
}

const getIahsea = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> check", email, name, city);

    // let {email, name, city} = req.body;


    // INSERT INTO Users(email, name, city)
    // VALUES('iahsea@gmail.com', 'Nguyen Hai', 'ha tinh');

    connection.query(
        `INSERT INTO 
        Users(email, name, city) 
        VALUES (?, ?, ?);`,
        [email, name, city],
        function (err, results) {
            res.send(' Created user succeed !')
        }
    );


}

module.exports = {
    getHomepage, getABC, getIahsea, postCreateUser
}