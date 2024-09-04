const User = require("../models/User.model");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }
    if (user.password !== password) {
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
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }
    user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.logout = async (req, res) => {
    res.json({ msg: "Logout" });    
}
