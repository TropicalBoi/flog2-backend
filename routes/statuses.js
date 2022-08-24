const router = require("express").Router();
let Status = require("../models/status.model");

router.route("/").get((req, res) => {
  Status.find()
    .then((statuses) => res.json(statuses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const activities = req.body.activities;
  const msg = req.body.msg;
  const date = Date.parse(req.body.date);

  const newStatus = new Status({
    username,
    activities,
    msg,
    date,
  });

  newStatus
    .save()
    .then(() => res.json("Status added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
