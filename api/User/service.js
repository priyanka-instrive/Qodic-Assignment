const User = require("./index.js");

const createUser = async (userData) => {
    const newUser = await User.create(userData);
    return newUser;
};

const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

const updateUser = async (id, userData) => {
    const updatedUser = await User.findByIdAndUpdate(id, userData, {
        new: true,
    });
    return updatedUser;
};

const deleteUser = async (id) => {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
};

const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

const getUser = async (params) => {
    const users = await User.findOne({ ...params });
    return users;
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers,
    getUser,
};
