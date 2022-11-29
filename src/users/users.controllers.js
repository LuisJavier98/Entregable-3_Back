
const Tasks = require('../models/users.models')

const findAllUsers = async () => {
    users = await Tasks.findAll()
    users.sort((a, b) => a.id - b.id)
    return users
}

const findUserById = async (id) => {
    users = await Tasks.findOne({
        where: {
            id: id
        }
    })
    return users

}

const createUser = async (obj) => {
    const users = await Tasks.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    })
    return users
}

const updateUser = async (id, obj) => {
    const user = await Tasks.update(obj, {
        where: {
            id: id
        }
    })

}

const deleteUser = async (id) => {
    const users = await Tasks.destroy({
        where: {
            id: id
        }
    })
    return users

}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}


