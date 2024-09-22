const service = require("./service");
const jwt = require("../../system/middleware/jwt");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const newPass = await bcrypt.hash(password, 10);
        const user = await service.createUser({
            name,
            email,
            password: newPass,
        });
        res.status(201).json({
            message: "User created successfully",
            user,
        });
    } catch (error) {
        next(error);
    }
};

const signin = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await service.getUser({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
        const token = await jwt.createToken(user._id);

        const refreshToken = await jwt.createRefreshToken(user._id);
        const result = {
            message: "Sign In Successfully",
            accessToken: token,
            refreshToken,
            _id: user._id,
        };

        return res.status(200).json(result);
    } else {
        next(error);
    }
};

const getRefreshToken = async (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    const token = await jwt.verifyRefToken(res, refreshToken);
    const result = {
        message: "Token Gated Successfully",
        accessToken: token,
    };
    res.status(200).json(result);
    return;
};
const getUser = async (req, res, next) => {
    try {
        const user = await service.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await service.updateUser(req.params.id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User updated successfully",
            updatedUser,
        });
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await service.deleteUser(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await service.getAllUsers();
        res.status(200).json({ users });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser,
    signin,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getRefreshToken,
};
