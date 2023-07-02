const express = require("express");
const router = express.Router();
const { Grocery } = require("../models");

router.get("/", async (req, res) => {
  const grocerybest = await Grocery.findAll({
    order: [['soldOut', 'DESC']],
    limit:1
  });
  const groceryProfit = await Grocery.findAll({
    order: [['totalProfit', 'DESC']],
    limit:1
  });
  const groceryall = await Grocery.findAll({
    order: [['soldOut', 'DESC']]


  });
  const lowStock = await Grocery.findAll({
    order: [['stockCount', 'ASC'],['totalProfit','DESC']],
    limit:1

  });
  const groceryProfitall = await Grocery.findAll({
    order: [['totalProfit', 'DESC']]


  });

  res.json([grocerybest,groceryProfit,groceryall,lowStock,groceryProfitall]);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const Count = req.body.Count;
  
  const stockrestore = await Grocery.update(
    {
      stockCount:Count,
    },
    {
      where:{id:id},
    }
  );
  res.json(stockrestore);
});

router.post("/", async (req, res) => {
  const grocery = req.body;
  await Grocery.create(grocery);
  res.json(grocery);
});

module.exports = router;
