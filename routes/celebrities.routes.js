// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/", (req, res) => {
    Celebrity.find()
    .then((data) => {
        res.render("celebrities", { celebrities: data });

    })
    .catch((error) => console.log(error))
});

router.get("/create", (req, res) => {
    res.render("new-celebrity");
  });

router.post("/create", (req, res) => {
    Celebrity.create(req.body)
    .then(() => {
        res.redirect("/celebrities");
    })
    .catch((error) => {
        console.log(error);
        res.redirect("new-celebrity")
    });
  });
  
module.exports = router;