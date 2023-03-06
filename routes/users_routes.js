const UsersController = require('../controllers/users_controller');


module.exports = (app) =>{

    app.get('/api/users/getAll', UsersController.getAll);

}