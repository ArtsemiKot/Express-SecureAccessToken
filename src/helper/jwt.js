const jwt = require('jsonwebtoken');

function createToken(user) {
    const secret = 'h11l22'
    const data = {
        id: user[0].id,
        email: user[0].email
    }
    return jwt.sign(data, secret);
}

module.exports = createToken;