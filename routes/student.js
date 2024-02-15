const routes = require('express').Router();


const { body } = require('express-validator');

const controller = require('../controller/student')


routes.post("/add", body('name').notEmpty(),body('age').notEmpty(), controller.add);

routes.put("/update/:id", controller.update);

routes.delete("/delete/:id", controller.delete);

routes.get("/", controller.list);

routes.get("/:id", controller.getById);

module.exports = routes;