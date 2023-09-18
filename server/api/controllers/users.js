const NotFoundError = require("../../errors/not-found");
const Users = require("../models/users");

const index = async (req, res) => {
  try {
    const result = await Users.find();

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res) => {
  try {
    const { username } = req.body;

    const result = await Users.findOne({ username });

    if (!result) throw new NotFoundError("username not found");
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const create = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const result = await Users.create({ username, email, password });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    const check = await Users.findOne({ username, _id: { $ne: id } });

    if (!check) {
      throw new NotFoundError("username not found");
    }
    const result = await Users.findOneAndUpdate(
      { _id: id },
      { username, email, password },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Users.findOne({ _id: id });

    if (!result) {
      throw new NotFoundError("id not found");
    }

    await result.deleteOne();

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
  create,
  find,
  update,
  remove,
};
