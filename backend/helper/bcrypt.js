const bcrypt = require('bcryptjs');
module.exports = {
    hashPassword: (password) => bcrypt.hashSync(password,10),
    comparePassword: (password,db_password) => bcrypt.compareSync(password,db_password)
}