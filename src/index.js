const express = require('express');
const {connect} = require("./configs/db");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())

const { userRouter } = require("./router/user.router");
const { register, login } = require("./controllers/user.controller")
const port = process.env.PORT || 8080;

app.post("/register", register);
app.post("/login", login);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port,async  ()=>{
 await connect()
 console.log("listening on port 8080");
})
