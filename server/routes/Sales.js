const express = require("express");
const router = express.Router();
const { Sales } = require("../models");

router.get("/", async (req, res) => {
  const sale = await Sales.findAll();
 
  res.json(sale);
});

router.put("/invesment/:id", async (req, res) => {
  const id = req.params.id;
  const Invest = req.body.invest;
  const product = await Sales.findOne({ where: { id: id } });
  const Inversted = await Sales.update(
    {
      Invesment:product.Invesment+Invest,
    },
    {
      where:{id:id},
    }
  );
  res.json(Inversted);
});

router.put("/returns/:id", async (req, res) => {
    const id = req.params.id;
    const Return = req.body.return;
    const product = await Sales.findOne({ where: { id: id } });
    const Returned = await Sales.update(
      {
        Returns:product.Returns+Return,
      },
      {
        where:{id:id},
      }
    );
    res.json(Returned);
});

router.put("/target/:id", async (req, res) => {
    const id = req.params.id;
    const Target = req.body.target;
    
    const Targetvalue = await Sales.update(
      {
        Targets:Target,
      },
      {
        where:{id:id},
      }
    );
    res.json(Targetvalue);
});



router.post("/", async (req, res) => {
  const sale = req.body;
  await Sales.create(sale);
  res.json(sale);
});

module.exports = router;
