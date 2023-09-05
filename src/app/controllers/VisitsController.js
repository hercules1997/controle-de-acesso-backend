import * as Yup from "yup"
// import Category from "../models/Category"
import User from "../models/User"
import database from "../../database"
import { Sequelize } from "sequelize"
import Visits from "../models/Visits"

const sequelize = database.connection
class VisitsControler {
  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        rg: Yup.number().required(),
        cpf: Yup.number().required(),
        phone: Yup.number().required(),
        address: Yup.string().required(),
        number: Yup.string().required(),
        zipcode: Yup.number().required(),
        namemother: Yup.string().required(),
        namefather: Yup.string().required(),
        vehicle: Yup.boolean(),
        model: Yup.string().required(),
        brand: Yup.string().required(),
        color: Yup.string().required(),
        spat: Yup.number().required(),
      })

      try {
        await schema.validateSync(request.body, {
          abortEarly: false,
        })
      } catch (err) {
        return response.status(400).json({
          error: err.errors,
        })
      }

      // const { admin: isAdmin } = await User.findByPk(request.userId)

      // if (!isAdmin) {
      //   return response.status(401).json({
      //     message: "Não autorizado",
      //   })
      // }

      // const { filename: path } = request.file
      const {
        name,
        rg,
        cpf,
        phone,
        address,
        number,
        zipcode,
        namemother,
        namefather,
        vehicle,
        model,
        brand,
        color,
        spat,
      } = request.body

      const visit = await Visits.create({
        name,
        rg,
        cpf,
        phone,
        address,
        number,
        zipcode,
        namemother,
        namefather,
        vehicle,
        model,
        brand,
        color,
        spat,
      })

      return response.json(visit)
    } catch (err) {
      console.log(err)
    }
  }

  async index(request, response) {
    const visits = await Visits.findAll({
      include: [
        {
          model: Visits,
          as: "Visits",
          attributes: ["id", "name"],
        },
      ],
    })

    return response.json(visits)
  }

  async delete(request, response) {
    try {
      const people = sequelize.define("visits", {
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
      })

      const { id } = request.params
      const visitsId = await Product.findByPk(id)
      console.log(visitsId)

      people.destroy({ where: { id: visitsId.dataValues.id } })
      return response
        .status(200)
        .json({ message: "Contato deletado com sucesso!" })
    } catch (error) {
      console.log(err)
    }
  }

  async update(request, response) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        rg: Yup.number().required(),
        cpf: Yup.number().required(),
        phone: Yup.number().required(),
        address: Yup.string().required(),
        number: Yup.string().required(),
        zipcode: Yup.number().required(),
        namemother: Yup.string().required(),
        namefather: Yup.string().required(),
        vehicle: Yup.boolean(),
        model: Yup.string().required(),
        brand: Yup.string().required(),
        color: Yup.string().required(),
        spat: Yup.number().required(),
      })

      try {
        await schema.validateSync(request.body, {
          abortEarly: false,
        })
      } catch (err) {
        return response.status(400).json({
          error: err.errors,
        })
      }
      const { admin: isAdmin } = await User.findByPk(request.userId)

      if (!isAdmin) {
        return response.status(401).json({
          message: "Não autorizado",
        })
      }

      const { id } = request.params

      const visit = await Visits.findByPk(id)

      if (!visit) {
        return response.status(401).json({
          message: "Visitante não existe",
        })
      }

      // let path
      // if (request.file) {
      //   path = request.file.filename
      // }

      const {
        name,
        rg,
        cpf,
        phone,
        address,
        number,
        zipcode,
        namemother,
        namefather,
        vehicle,
        model,
        brand,
        color,
        spat,
      } = request.body

      await Visits.update(
        {
          name,
          rg,
          cpf,
          phone,
          address,
          number,
          zipcode,
          namemother,
          namefather,
          vehicle,
          model,
          brand,
          color,
          spat,
        },
        {
          where: {
            id,
          },
        }
      )

      return response.status(200).json({
        message: "Alterado com sucesso!",
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export default new VisitsControler()
