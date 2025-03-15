
const getHomepage = (req, res) => {
    res.send('Hello World vs Iahsea')
}

const getABC = (req, res) => {
    res.send("check ABC")
}

const getIahsea = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getIahsea
}