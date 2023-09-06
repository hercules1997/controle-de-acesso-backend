import Sequelize from "sequelize"
// import mongoose from "mongoose"

// import Product from "../app/models/Product"
import User from "../app/models/User"
// import Category from "../app/models/Category"

import configDatabase from "../config/database"
import Visits from "../app/models/Visits"

const models = [User, Visits]

class Database {
  constructor() {
    this.init()

  }

  init() {
    this.connection = new Sequelize(configDatabase.url)
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }


}

export default new Database()
