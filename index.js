const express = require("express")
    //console.log(express)
const app = express()
app.get("/home", (req, res) => {
    res.send("hello")
});
app.get("/book", (req, res) => {
    res.send({
        "Adventures of Tom Sawyer": "Mark Twain",
        "Agni Veena ": "Kazi Nasrul Islam",
        "Animal Farm ": "George Orwell ",
        "Ben Hur ": "Lewis Wallace"
    })
});
app.listen(3400, () => {
    console.log("this is 3400 port")
})