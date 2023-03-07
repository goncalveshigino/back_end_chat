const User = require('../models/user');

module.exports = {

    async getAllUsers(req,res,next){
        try {
            const data = await User.getAllUsers();
            console.log(`Users: ${data}`);
            return res.status(201).json(data);
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Erro ao pegar todos usuarios'
            });
        }
    },


    async createUser(req, res, next){
        try {
            
         const user = req.body;
         const data = await User.createUser(user);

         return res.status(201).json({
            success: true, 
            message: 'Sucesso do cadastro',
            data: data.id
         });

        } catch (error) {

            console.log(`Error: ${error}`);
            return res.status(501).json({
              success: false, 
              message: 'Erro ao cadastrar usuario', 
              error: error
            });
            
        }
    },


    async singnIn(req,res,next){

        try {

            const { email, password } = req.body;

            const myUser = await User.findByEmail(email);

            if(!myUser){
                return res.status(401).json({
                    success:false,
                    message: 'Email nao foi encontrado'
                })
            }
            
        } catch (error) {

            console.log(`Error: ${error}`);
            return res.status(501).json({
              success: false, 
              message: 'Erro no login do usuario', 
              error: error
            });
            
        }

    }

}