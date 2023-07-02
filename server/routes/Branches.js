const express = require("express");
const router = express.Router();
const { Branches } = require("../models");

router.get("/", async (req, res) => {
  const branch = await Branches.findAll();
 
  res.json(branch);
});

router.put("/profit/:id", async (req, res) => {
  const id = req.params.id;
  const returns = req.body.invest;
  
  const profit = await Branches.update(
    {
      Returns:returns,
    },
    {
      where:{id:id},
    }
  );
  res.json(profit);
});

router.put("/returns/:id", async (req, res) => {
  const id = req.params.id;
  // const Count = req.body.Count;
  const profit = req.body.Profit;
  const newBranch = await Branches.findOne({ where: { id: id } });
  const returnUpdate = await Branches.update(
    {
      Returns:newBranch.Returns+profit,
    },
    {
      where:{id:id},
    }
  );
  res.json(returnUpdate);
});


router.post("/", async (req, res) => {
  const branch = req.body;
  await Branches.create(branch);
  res.json(branch);
});

module.exports = router;
