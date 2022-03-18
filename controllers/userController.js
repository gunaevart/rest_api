const User = require('../models/Users');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');

class userController{

    async registration(req, res){
        try {
            
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(candidate){
                return res.status(400).json({messages: 'Пользователь с таким логином есть'})
            }
            
            const hasPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value: 'USER'})
            const user = new User({username, password: hasPassword, role: userRole})
            user.save()
            return res.json({message: 'Пользователь успешно зарегестрирован!'})


        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error!'})
        }
    }
    async login(req, res){
        try {


        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'login error!'})
        }
    }

    async getUsers(req, res){
        try {
            const userRole = new Role()
            const adminRole = new Role({value: 'Admin'})
            await userRole.save()
            await adminRole.save()
            res.json({'login':'vladimir'})
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = new userController()