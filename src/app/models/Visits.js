import Sequelize, { Model } from "sequelize"

class Visits extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        rg: Sequelize.INTEGER,
        cpf: Sequelize.INTEGER,
        phone: Sequelize.INTEGER,
        address: Sequelize.STRING,
        number: Sequelize.INTEGER,
        zipcode: Sequelize.INTEGER,
        namemother: Sequelize.STRING,
        namefather: Sequelize.STRING,
        // path: Sequelize.STRING,
        vehicle: Sequelize.BOOLEAN,
        model: Sequelize.STRING,
        brand: Sequelize.STRING,
        color: Sequelize.STRING,
        spat: Sequelize.INTEGER,
        // url: {
        //   type: Sequelize.VIRTUAL,
        //   get() {
        //     return `http://localhost:3007/visits-file/${this.path}`
        //   },
        // },
      },
      {
        sequelize,
      }
    )
    return this
  }

  //  static associate(models) {
  //    this.belongsTo(models.Visits, {
  //      foreignKey: "visit_id",
  //      as: "visitis",
  //    })
  //  }
}

export default Visits
