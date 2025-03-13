const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Hello ABC!')
})

app.get('/iahsea', (req, res) => {
    res.send('<h1>Iahsea</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})