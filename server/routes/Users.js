const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { mailid, password, usertype } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      mailid: mailid,
      password: hash,
      usertype:usertype,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { mailid, password } = req.body;

  const user = await Users.findOne({ where: { mailid: mailid } });

  if (!user)
  {
    res.json({ error: "Please register" });
    return;
  } 

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) 
    {
      res.json({ error: "Wrong Username And Password Combination" });
      return;
    }

    
    res.json(user.usertype);
    // res.json("abcsdwe");

  });
});

module.exports = router;
