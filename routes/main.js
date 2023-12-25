const express = require("express");
const router = express.Router();
const flashMessage = require("../helpers/messenger");

router.get("/", (req, res) => {
  const title = "Video Jotter";
  // renders views/index.handlebars, passing title as an object
  res.render("index", { title: title });
});

router.get("/about", (req, res) => {
  const author = "Huai Hai";
  res.render("about", { author });
});

router.post("/flash", (req, res) => {
  const message = "This is an important message";
  const error = "This is an error message";
  const error2 = "This is the second error message";

  // req.flash('message', message);
  // req.flash('error', error);
  // req.flash('error', error2);
  flashMessage(res, "success", message);
  flashMessage(res, "info", message);
  flashMessage(res, "error", error);
  flashMessage(res, "error", error2, "fas fa-sign-in-alt", true);

  res.redirect("/about");
});
router.post("/listDrugs", async function (req, res) {
  let search = req.body.search;
  console.log(search);
  Drug.findAll({
    where: { camid: search },
    order: [["camid", "DESC"]],
    raw: true,
  })
    .then((drugs) => {
      // pass object to listVideos.handlebar
      res.render("drug/listDrugs", { drugs });
    })
    .catch((err) => console.log(err));
});
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
module.exports = router;
