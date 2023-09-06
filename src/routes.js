import { Router } from "express"
import multer from "multer"
import multerConfig from "./config/multer"
//  import authMiddleware from "./app/middlewares/auth"

import SessionController from "./app/controllers/SessionController"
// import CategoryController from "./app/controllers/CategoryController"
import UserController from "./app/controllers/UserController"
// import OrderController from "./app/controllers/OrderController"
import VisitsController from "./app/controllers/VisitsController"
import multerConfig from "./config/multer"
const routes = new Router()
const upload = multer(multerConfig)

// routes.get("/visits", VisitsController.index)
// routes.get("/categories", CategoryController.index)
/*
ROTA PARA CRIAÇÃO DE USUÁRIOS
*/
routes.get("/users", UserController.store)
routes.post("/users", UserController.store)

/*
 ROTA PARA REALIZAR O LOGIN
*/
routes.post("/sessions", SessionController.store)

/*
AUTENTICAÇÃO COM JWT (TODAS AS ROTAS EMBAIXO DEPENDE DESSA AUTENTICAÇÃO)
*/
//  routes.use(authMiddleware)

/*
ROTAS DOS PRODUTOS
*/
routes.get("/visits", VisitsController.index)
routes.post("/visits", upload.single("file"), VisitsController.store)
routes.put("/visits/:id", upload.single("file"), VisitsController.update)
routes.delete("/visits/:id", upload.single("file"), VisitsController.delete)

/*
ROTAS DAS CATEGORIAS
*/
// routes.post("/categories", upload.single("file"), CategoryController.store)
// routes.get("/categories", CategoryController.index)
// routes.put("/categories/:id", upload.single("file"), CategoryController.update)

/* 
ROTAS DAS ORDENS DOS PEDIDOS
*/
// routes.post("/orders", OrderController.store)
// routes.put("/orders/:id", OrderController.update)
// routes.get("/orders", OrderController.index)

export default routes
