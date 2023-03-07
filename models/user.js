const db = require('../config/config');
const bcrypt = require('bcryptjs');

const User = {};

User.getAllUsers = () => {
   
    const sql = 'SELECT * FROM users';

    return db.manyOrNone(sql);
}


User.createUser = async (user) => {

    const hash = await bcrypt.hash(user.password, 10);

    const sql = `

    INSERT INTO 
        users(
            email,
            firstname,
            lastname,
            phone,
            image,
            password,
            created_at,
            updated_at
        ) 
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING id
    
    `;

    return db.oneOrNone(sql, [
        user.email,
        user.firstname,
        user.lastname, 
        user.phone,
        user.image,
        hash,
        new Date(),
        new Date()
    ]);
}


User.findById  = (id, callback) => {
    const sql = `
      
    SELECT
        id,
        email,
        firstname,
        lastname,
        phone,
        password,
        session_token
    FROM 
        users 
    WHERE id = $1
    `;

    return db.oneOrNone(sql, id).then(user => {callback(null, user)})
}

User.findByEmail = (email) => {

    const sql = `
      
    SELECT
        id,
        email,
        firstname,
        lastname,
        phone,
        password,
        session_token
    FROM 
        users 
    WHERE email = $1
    `;

    return db.oneOrNone(sql, email);

}


module.exports = User;