const UsersController = require('../controllers/users_controller');


module.exports = (app) =>{

    app.get('/api/users/getAllUsers', UsersController.getAllUsers);

    app.post('/api/users/createUser', UsersController.createUser);

}