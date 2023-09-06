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
        vehicle: Sequelize.BOOLEAN,
        model: Sequelize.STRING,
        brand: Sequelize.STRING,
        color: Sequelize.STRING,
        spat: Sequelize.INTEGER,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `https://controle-de-acesso-backend-production.up.railway.app/visits-file/${this.path}`
          },
        }, // Adicione o caminho da imagem aqui// Adicione o campo de imagem
      },
      {
        sequelize,
      }
    )
    return this
  }

}

export default Visits
