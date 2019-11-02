// index = listagem, show= listar unica sessao, store= criar uma sessao,
// update= alterar uma sessão, delete= deletar uma sessão
const User = require('../models/User')
module.exports = {
  async store(req, res) {
   const { email } = req.body;
    let user = await User.findOne({ email })

    if (!user) {
      user = await User.create({ email })
    }
   // const user = await User.create({ email });

   return res.json(user)
  }
}