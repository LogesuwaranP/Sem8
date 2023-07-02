const express = require("express");
const router = express.Router();
const { Feedback } = require("../models");

router.get("/", async (req, res) => {
  const listOfFeedback = await Feedback.findAll({
    order: [['createdAt', 'DESC']],
    limit:3
  });
  res.json(listOfFeedback);
});

router.get("/all", async (req, res) => {
  const listOfFeedback = await Feedback.findAll({
    order: [['createdAt', 'DESC']],
  });
  res.json(listOfFeedback);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const Rate = req.body.Rate;
  
  const feedback = await Feedback.update(
    {
      Rating:Rate,
    },
    {
      where:{id:id},
    }
  );
  res.json(feedback);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  
  const feedback = await Feedback.destroy(
    {
      where:{id:id},
    }
  );
  res.json("delete ");
  
});

router.post("/", async (req, res) => {
  const feedback = req.body;
  await Feedback.create(feedback);
  res.json(feedback);
});

module.exports = router;
