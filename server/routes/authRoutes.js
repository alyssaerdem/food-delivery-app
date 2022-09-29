const express = require("express");
const cookie = require("cookie");
const router = express.Router();

router.post("/", (req, res) => {
        const { username, password } = req.body;
        if (
          username === process.env.ADMIN_USERNAME &&
          password === process.env.ADMIN_PASSWORD
        ) {
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", process.env.TOKEN, {
              maxAge: 60 * 15,
              sameSite: "strict",
              path: "/",
            })
          );
          res.status(200).json("Success");
        } else {
          res.status(400).json("Invalid credentials");
        }
      });

module.exports = router;