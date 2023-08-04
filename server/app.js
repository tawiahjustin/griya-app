const express = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config({ path: './config/.env' })
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user')
const bcrypt = require('bcrypt')

const app = express()
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10)
const secret = 'j3bi749439hjf8hjfr39giru39h'
// cors

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.use(express.json())
app.use(cookieParser())
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('connection established')
  })
  .catch((error) => {
    console.log('error connecting ' + error.message)
  })
//

//inscription
app.post('/inscription', async (req, res) => {
  const { username, password, email } = req.body
  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    })
    res.json(userDoc)
  } catch (e) {
    res.status(400).json(e)
  }
})

// connexion
app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const userDoc = await User.findOne({ email })
  const passOk = bcrypt.compare(password, userDoc.password)
  if (passOk) {
    // login
    jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err
      res.cookie('token', token).json({ id: userDoc._id, email })
    })
  } else {
    res.status(400).json('wrong credentials')
  }
})

app.listen(8000, () => {
  console.log('Server started on port 8000')
})
