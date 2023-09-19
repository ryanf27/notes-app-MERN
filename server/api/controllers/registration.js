const bcrypt = require("bcrypt");
const Users = require("../models/users");

const create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await Users.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      messgae: "success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
