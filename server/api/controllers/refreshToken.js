const Users = require("../models/users");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const user = await Users.find({ refreshToken });

    if (!user) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const userId = user._id;
      const name = user.username;
      const email = user.email;
      const accessToken = jwt.sign(
        { userId, name, email },
        process.env.ACCESS_TOKEN,
        { expiresIn: "15s" }
      );
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = refreshToken;
