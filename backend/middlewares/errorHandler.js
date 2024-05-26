module.exports = (error, req, res, next) => {
    let status = error.status || 500
    let message = error.message || 'Internal server error'
    console.log(error)
    switch (error.name) {
        case 'SequelizeValidationError':
            status = 400
            message = error.errors[0].message
            break;
        case 'AuthenticationUser':
            status = 401
            message = 'Invalid email/password'
            break;
        case 'JsonWebTokenError':
        case 'Unauthenticated':
            status = 401
            message = 'Unauthenticated'
            break;
        case 'Unauthorized':
            status = 403
            message = 'Forbiden'
            break;
        case 'NotFound':
            status = 404
            message = 'Data not found'
            break;
    }
    res.status(status).json({ message: message })
}