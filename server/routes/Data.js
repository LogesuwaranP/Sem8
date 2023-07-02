const express = require("express");
const router = express.Router();
const { Data } = require("../models");



router.get("/", async (req, res) => {
  const dataAll = await Data.findAll();

  res.json(dataAll);
});



router.put("/set", async (req, res) => {
  const bis = req.body.bis;
  const soap = req.body.soap;
  const rice = req.body.rice;
  const oil = req.body.oil;
  
  const dataupdate = await Data.update(
    {
        Biscuit:bis,
        Soap:soap,
        Rice:rice,
        Oil:oil
    },
    {
      where:{id:2},
    }
  );
  res.json(dataupdate);
});



router.put("/buy", async (req, res) => {

    const bis = req.body.bis;
    const soap = req.body.soap;
    const rice = req.body.rice;
    const oil = req.body.oil;

    const product = await Data.findOne({ where: { id: 2 } });

    const dataupdate = await Data.update(
      {
          Biscuit:product.Biscuit+bis,
          Soap:product.Soap+soap,
          Rice:product.Rice+rice,
          Oil:product.Oil+oil
      },
      {
        where:{id:2},
      }
    );
    res.json(dataupdate);
  });



router.post("/", async (req, res) => {
  const data = req.body;
  await Data.create(data);
  res.json(data);
});

module.exports = router;
