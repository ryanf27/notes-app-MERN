const bcrypt = require("bcrypt");
const Users = require("../models/users");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await Users.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "success",
    });``
  } catch (error) {
    next(error);
  }
};

module.exports = register;
