const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');


const getHomepage = async (req, res) => {
    const results = await getAllUsers();
    console.log('>>>>>=====', results);

    return res.render('home.ejs', { listUser: results })
}

const getABC = (req, res) => {
    res.send("check ABC")
}

const getIahsea = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> check", email, name, city);

    // let {email, name, city} = req.body;


    const [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );

    console.log('>>> check results', results);
    res.send(' Created user succeed !')


    // connection.query(
    //     'select * from Users u',
    //     function (err, results, fields) {
    //         console.log(">>>results= ", results); // results contains rows returned by server
    //     }
    // );

    // const [results, fields] = await connection.query('select * from Users u');



}

const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    return res.render('edit.ejs')
}

module.exports = {
    getHomepage, getABC, getIahsea, postCreateUser, getCreatePage, getUpdatePage
}