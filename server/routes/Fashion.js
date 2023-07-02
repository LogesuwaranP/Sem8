const express = require("express");
const router = express.Router();
const { Fashion } = require("../models");

router.get("/", async (req, res) => {
  const fashionbest = await Fashion.findAll({
    order: [['soldOut', 'DESC']],
    limit:1
  });
  const fashionProfit = await Fashion.findAll({
    order: [['totalProfit', 'DESC']],
    limit:1
  });
  const fashionall = await Fashion.findAll({
    order: [['soldOut', 'DESC']]


  });
  const lowStock = await Fashion.findAll({
    order: [['stockCount', 'ASC'],['totalProfit','DESC']],
    limit:1

  });
  const fashionProfitall = await Fashion.findAll({
    order: [['totalProfit', 'DESC']]


  });

  res.json([fashionbest,fashionProfit,fashionall,lowStock,fashionProfitall]);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const Count = req.body.Count;
  
  const stockrestore = await Fashion.update(
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
  const fashion = req.body;
  await Fashion.create(fashion);
  res.json(fashion);
});

module.exports = router;
