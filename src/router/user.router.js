const express = require("express");
const jwt = require("jsonwebtoken");

const { user } = require("../models/user.model");

const { authenticate } = require("../middleware/authenticate");

require("dotenv").config();

const newToken = (data) => {
	// console.log(process.env);
	return jwt.sign({ data }, process.env.KEY);
};
const userRouter = express.Router();


userRouter.get("/:id", async (req,res) => {
    try {
        		const data = await user.findOne({
					_id: req.params.id,
				});

                // const token = newToken(data)
				return res.send(data).status(200);

    } catch (error) {
		res.send(error.message).status(501);

    }
});

module.exports = { userRouter };