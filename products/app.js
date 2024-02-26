const express = require('express')

const app = express();

app.get("/products", (req, res) => {
    res.json({
        status: 200,
        data: [
            {
                name: "Mobile",
            },
            {
                name: "Headphones",
            },
            {
                name: "Laptop",
            }
        ]
    })
})

app.listen(4002, () => {
    console.log('Products app is running on port 4002')
})