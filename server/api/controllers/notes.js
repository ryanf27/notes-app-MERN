const Notes = require("../models/notes");

const show = async (req, res) => {
  try {
    const result = await Notes.find();

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    console.error(err.message);
  }
};

const find = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Notes.findOne({ _id: id });

    if (!result) {
      console.log("not found ");
    }
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    console.error(err.message);
  }
};

const create = async (req, res) => {
  try {
    const { title, body } = req.body;

    const check = await Notes.findOne({ title });

    if (check) {
      console.error(err.message);
    }
    const result = await Notes.create({ title, body });

    res.status(201).json({
      data: result,
    });
  } catch (err) {
    console.error(err.message);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    const check = await Notes.findOne({ title, _id: { $ne: id } });

    if (!check) {
      console.log("data not found");
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
    console.error(err);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Notes.findOne({ _id: id });

    if (!result) {
      console.log("data not found");
    }

    await result.deleteOne();

    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  show,
  create,
  find,
  update,
  remove,
};
