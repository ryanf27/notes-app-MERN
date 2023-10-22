const Notes = require("../models/notes");
const NotFoundError = require("../../errors/not-found");
const BadRequestError = require("../../errors/bad-request");

const index = async (req, res, next) => {
  try {
    const result = await Notes.find();

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const find = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Notes.findOne({
      _id: id,
    });

    if (!result) {
      throw new NotFoundError(`Id Not Found`);
    }
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { title, body } = req.body;

    const check = await Notes.findOne({ title });

    if (check) {
      throw new BadRequestError(`The Note Name already used`);
    }
    await Notes.create({ title, body });

    res.status(201).json({
      message: "success",
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    const check = await Notes.findOne({ title, _id: { $ne: id } });

    if (!check) {
      throw new NotFoundError(`Id Not Found`);
    }
    const result = await Notes.findOneAndUpdate(
      { _id: id },
      { title, body },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Notes.findOne({ _id: id });

    if (!result) {
      throw new NotFoundError(`Id Not Found`);
    }

    await result.deleteOne();

    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  index,
  create,
  find,
  update,
  remove,
};
