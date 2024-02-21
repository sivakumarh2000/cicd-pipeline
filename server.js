const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "docker-ec2-nginx"
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})