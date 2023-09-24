const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const NotFoundError = require("../../errors/not-found");
const Users = require("../models/users");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await Users.findOne({ username });

    if (!result) throw new NotFoundError("username not found");

    const isMatch = await bcrypt.compare(password, result.password);

    if (!isMatch) return res.status(401).json({ message: "wrong password" });

    const userId = result._id;
    const name = result.usernmae;
    const email = result.email;

    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN,
      { expiresIn: "20s" }
    );

    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN,
      { expiresIn: "1d" }
    );

    await Users.findOneAndUpdate(
      { _id: userId },
      { refresh_token: refreshToken },
      { new: true, runValidators: true }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
