const { Revenue } = require('../models')
class CRevenue {
    static async showRevenue(req, res, next) {
        try {
            let revenue = await Revenue.findAll({ where: { UserId: req.user.id } })
            res.status(200).json(revenue)
        } catch (error) {
            next(error)
        }
    }

    static async addRevenue(req, res, next) {
        let { year, revenue } = req.body
        try {
            console.log(year,revenue)
            let newRev = await Revenue.create({year,revenue, UserId:req.user.id})
            res.status(201).json(newRev)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = CRevenue