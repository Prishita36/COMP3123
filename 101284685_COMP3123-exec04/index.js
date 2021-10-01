let express = require('express')
let app = express()

app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})

app.get("/user", (req, res) => {
    let firstname = req.query.firstname
    let lastname = req.query.lastname

    response = {
        firstname,
        lastname
    }
    res.send(response)
})

app.post("/user" , (req, res) => {
    res.send(`{"firstname": "Prishita", "lastname: "Ribadia}`)
})

let server = app.listen(8090, () => {
    console.log(server.address())
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at http://%s:%s", host, port)
})