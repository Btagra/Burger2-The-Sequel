var db = require("../models");

module.exports = function (app) {
    app.get("/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (data) {
            var hbsObject = { burgers: data };
            console.log(hbsObject);
            res.render("home", hbsObject);
        });
    });

    app.post("/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function (result) {
            res.redirect("/");
        })
    });

    app.put("/burgers/update/:id", function (req, res) {
        db.Burger.update({
            devoured: true
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (data) {
                res.redirect("/");
            });
    });
}
