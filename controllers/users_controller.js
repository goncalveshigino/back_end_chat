const User = require('../models/user');

module.exports = {

    async getAll(req,res,next){
        try {
            const data = await User.getAll();
            console.log(`Users: ${data}`);
            return res.status(201).json(data);
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Erro ao pegar todos usuarios'
            });
        }
    }

}