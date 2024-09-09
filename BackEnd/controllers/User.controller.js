const User = require("../models/User.model");
const bcrypt = require("bcryptjs");



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }
    const passwordHash = await bcrypt.compare(password, user.password);
    if (!passwordHash) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};



exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    user = new User(
      {
        email,
        password: passwordHash,
      }
    );
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.logout = async (req, res) => {
  res.json({ msg: "Logout" });
};
