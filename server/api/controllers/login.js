const bcrypt = require("bcrypt");

const NotFoundError = require("../../errors/not-found");
const Users = require("../models/users");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await Users.findOne({ username });

    if (!result) throw new NotFoundError();

    const isMatch = await bcrypt.compare(password, result.password);

    if (!isMatch) return res.status(401).json({ message: "failed to login" });

    res.status(200).json({
      message: "login success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
