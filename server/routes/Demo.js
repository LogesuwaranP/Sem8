const express = require("express");
const router = express.Router();
const { Demo } = require("../models");

router.get("/", async (req, res) => {
  const demobest = await Demo.findAll({
    order: [['soldOut', 'DESC']],
    limit:1
  });
  const demoProfit = await Demo.findAll({
    order: [['totalProfit', 'DESC']],
    limit:1
  });
  const demoall = await Demo.findAll({
    order: [['soldOut', 'DESC']]


  });

  const demoProfitall = await Demo.findAll({
    order: [['totalProfit', 'DESC']]


  });

  res.json([demobest,demoProfit,demoall,demoProfitall]);
});


router.get("/high", async (req, res) => {
  const profitList = await Demo.findAll({
    order: [['totalProfit', 'DESC']]

  });
 
  res.json(profitList);
});

router.get("/all", async (req, res) => {
  const demoAll = await Demo.findAll();
 
  res.json(demoAll);
});

router.get("/low", async (req, res) => {
  const lowStock = await Demo.findAll({
    order: [['stockCount', 'ASC'],['totalProfit','DESC']],
    limit:1

  });
 
  res.json(lowStock);
});





router.put("/stockrestore/:id", async (req, res) => {
  const id = req.params.id;
  const Count = req.body.Count;
  
  const stockrestore = await Demo.update(
    {
      stockCount:Count,
    },
    {
      where:{id:id},
    }
  );
  res.json(stockrestore);
});

router.put("/buy/:id", async (req, res) => {
  const id = req.params.id;
  // const Count = req.body.Count;
  const profit = req.body.Profit;
  const product = await Demo.findOne({ where: { id: id } });
  const bought = await Demo.update(
    {
      stockCount:product.stockCount-1,
      soldOut:product.soldOut+1,
      totalProfit:product.totalProfit+profit,
    },
    {
      where:{id:id},
    }
  );
  res.json(bought);
});


router.put("/cancel/:id", async (req, res) => {
  const id = req.params.id;
  // const Count = req.body.Count;
  const profit = req.body.Profit;
  const product = await Demo.findOne({ where: { id: id } });
  const bought = await Demo.update(
    {
      stockCount:product.stockCount+1,
      soldOut:product.soldOut-1,
      totalProfit:product.totalProfit-profit,
    },
    {
      where:{id:id},
    }
  );
  res.json(bought);
});







router.post("/", async (req, res) => {
  const demo = req.body;
  await Demo.create(demo);
  res.json(demo);
});

module.exports = router;
