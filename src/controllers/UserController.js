const User = require('../models/User')
const Yup = require('yup')

const bcrypt = require('bcrypt')


module.exports = {
    async index(req, res) {
        const user = await User.find()

        if(user.length === 0) {
            return res.status(400).json({ 'messageSuccess': 'Empty user list' })
        }

        return res.json(user)
    },

    // async store(req, res) {
    //     const id = req.params.id
    //     const { name, email } = await User.findOne({ where: {id: id} })

    //     if(!email) {
    //         return res.status(400).json({ messageError: 'User not found' })
    //     }

    //     return res.json({ id, name, email })
    // },

    async store(req, res) {
        const Schema = Yup.object().shape({
            username: Yup.string().required(),
            role: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        })

        if(!(await Schema.isValid(req.body))){
            return res.status(400).json({error: 'Validation fails'})
        }

        const userExists = await User.findOne({ where: { email: req.body.email } })

        if (userExists) {
            return res.status(400).json({ error: 'User already exists.' })
        }else {
            const {username, email, password, role } = req.body

            // newPassword = await bcrypt.hash(req.body.password, 10)

            const {id} = await User.create({
                username: username,
                email: email,
                password: password,
                role: role
            })

            return res.json({
                id,
                username,
                email,
                role
            })
        }
    }
}