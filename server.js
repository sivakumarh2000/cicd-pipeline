const express = require('express')

const app = express()

const users = require("./users/app")

const products = require("./products/app")

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "docker-ec2-nginx"
    })
})

app.use(users, products)

app.listen(8080, () => {
    console.log('server running on port 8080')
})