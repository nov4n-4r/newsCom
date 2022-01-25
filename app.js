const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.get("/read/:slug", (req, res) => {
    res.render("read.ejs")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))