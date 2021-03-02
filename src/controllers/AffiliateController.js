const Affiliate = require('../models/Affiliate')
const Yup = require('yup')

// const bcrypt = require('bcryptjs')


module.exports = {
    async index(req, res) {
        const affiliate = await Affiliate.find()

        if(affiliate.length === 0) {
            return res.status(400).json({ 'messageSuccess': 'Empty Affiliate list' })
        }

        return res.json(affiliate)
    },

    async store(req, res) {
        // const Schema = Yup.object().shape({
        //     username: Yup.string().required(),
        //     role: Yup.string().required(),
        //     email: Yup.string().email().required(),
        //     password: Yup.string().required().min(6),
        // })

        // if(!(await Schema.isValid(req.body))){
        //     return res.status(400).json({error: 'Validation fails'})
        // }

        const affiliate = await Affiliate.findOne({ where: { userId: req.body.userId } })

        if (affiliate) {
            return res.status(400).json({ error: 'Affiliate already exists.' })
        }else {
            await Affiliate.create(req.body)

            return res.json(req.body)
        }
    }
}