const users = require('./users.controllers')


const getAllUsers = (res, req) => {
    users.findAllUsers()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}

const getUserById = (res, req) => {
    const id = req.params.id
    users.findUserById(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))

}

const postUser = (res, req) => {
    const { first_name, last_name, email, password, birthday } = req.body
    users.createUser({ first_name, last_name, email, password, birthday })
        .then(data => res.status(201).json(data))
        .catch(err => res.status(404).json({ message: err.message }))

}
const patchUser = (res, req) => {
    const id = req.params.id
    const { first_name, last_name, email, password, birthday } = req.body
    users.updateUser(id, { first_name, last_name, email, password, birthday })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}

const deleteUser = (res, req) => {
    const id = req.params.id
    users.deleteUser(id)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(404).json({ message: err.message }))

}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}

