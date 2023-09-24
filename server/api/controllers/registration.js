const bcrypt = require("bcrypt");
const Users = require("../models/users");

const register = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (password != confirmPassword)
      return res
        .status(400)
        .json({ message: "Password and confirmation password do not match." });

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await Users.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
