const express = require("express");
const router = express.Router();
const flashMessage = require("../helpers/messenger");
const Drug = require("../models/Drug");

router.get("/listDrugs", (req, res) => {
  // console.log(searchValue)
  // Drug.findAll({
  //     where: { camid: req.query.search },
  //     order: [['camid', 'DESC']],
  //     raw: true
  // })
  //     .then((drugs) => {
  //         // pass object to listVideos.handlebar
  //         res.render('drug/listDrugs', { drugs });
  //     })
  //     .catch(err => console.log(err));
  res.render("drug/listDrugs");
});

router.post("/listDrugs", async function (req, res) {
  let search = req.body.search;
  console.log(search);
  Drug.findAll({
    where: { cam: search },
    order: [["camid", "DESC"]],
    raw: true,
  })
    .then((drugs) => {
      // pass object to listVideos.handlebar
      res.render("drug/listDrugs", { drugs });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
