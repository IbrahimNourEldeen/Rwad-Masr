const Users = require('../models/users.model');
const httpStatus = require('../utilities/httpStatus');

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        if (!users.length) {
            return res.status(404).json({ status: httpStatus.FAIL, data: "No users found" });
        }
        res.status(200).json({ status: httpStatus.SUCCESS, data: { users } });
    } catch (err) {
        res.status(400).json({ status: httpStatus.ERROR, message: err.message });
    }
};

const addUser = async (req, res) => {
    try {
        const newUser = new Users(req.body);
        await newUser.save();
        res.status(201).json({ status: httpStatus.SUCCESS, data: { newUser } });
    } catch (err) {
        res.status(400).json({ status: httpStatus.ERROR, message: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ status: httpStatus.FAIL, data: "User not found" });
        }
        res.status(200).json({ status: httpStatus.SUCCESS, data: { updatedUser } });
    } catch (err) {
        res.status(400).json({ status: httpStatus.ERROR, message: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deleteResult = await Users.deleteOne({ _id: req.params.id });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({ status: httpStatus.FAIL, data: "User not found" });
        }
        res.status(200).json({ status: httpStatus.SUCCESS, message: "User deleted successfully" });
    } catch (err) {
        res.status(400).json({ status: httpStatus.ERROR, message: err.message });
    }
};

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
};
