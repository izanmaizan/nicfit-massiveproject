<<<<<<< HEAD
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'
=======
import Users from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import path from 'path'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
import User from '../models/UserModel.js'

const SECRET_KEY =
  process.env.ACCESS_TOKEN_SECRET || 'qwerttyuio12345asdfghjkl67890zxcvbnm'

export const getUsers = async (req, res) => {
  try {
<<<<<<< HEAD
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Internal server error' })
=======
    const users = await Users.findAll()
    res.json(users)
  } catch (error) {
    console.log(error)
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
  }
}

export const Register = async (req, res) => {
  const { username, email, password } = req.body

<<<<<<< HEAD
  try {
    const user = await User.findOne({ key: 'username', value: username })
    if (user) {
      return res
        .status(404)
        .json({ msg: 'Username sudah ada! ganti username!' })
    }

    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)

    await User.create({
      username,
      email,
      password: hashPassword,
      role: 'user',
    })

    res.json({ msg: 'Register Berhasil' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Internal server error' })
=======
  const user = await Users.findOne({ where: { username } })
  if (user) {
    return res.status(404).json({ msg: 'Username sudah ada! ganti username!' })
  }

  const salt = await bcrypt.genSalt()
  const hashPassword = await bcrypt.hash(password, salt)
  try {
    await Users.create({
      username: username,
      email: email,
      password: hashPassword,
      role: 'user',
    })
    res.json({ msg: 'Register Berhasil' })
  } catch (error) {
    console.log(error)
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
  }
}

export const Login = async (req, res) => {
  try {
<<<<<<< HEAD
    const user = await User.findOne({ key: 'email', value: req.body.email })
=======
    const user = await Users.findOne({
      where: {
        email: req.body.email,
      },
    })
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5

    if (!user) {
      return res.status(404).json({ msg: 'User not found' })
    }

    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) {
      return res.status(400).json({ msg: 'Wrong Password' })
    }

    const { id, name, username, email, phone, role, image, url } = user

    const accessToken = jwt.sign(
      {
        userId: id,
        name,
        username,
        email,
        phone,
        role,
        image,
        url,
      },
      SECRET_KEY,
      {
        expiresIn: '1d',
      },
    )

<<<<<<< HEAD
    await User.update(id, {
      refresh_token: accessToken,
      name: user.name || null,
      username: user.username || null,
      email: user.email || null,
      password: user.password || null,
      alamat: user.alamat || null,
      phone: user.phone || null,
      image: user.image || null,
      url: user.url || null,
    })
=======
    await Users.update(
      { refresh_token: accessToken },
      {
        where: {
          id,
        },
      },
    )
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5

    res.json({ accessToken, role })
  } catch (error) {
    console.log(error.message)
<<<<<<< HEAD
    res.status(500).json({ msg: 'Internal server error' })
=======
    return res.status(401).json({
      msg: error.message,
    })
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
  }
}

export const Me = async (req, res) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
<<<<<<< HEAD
    if (!token) return res.status(401).json({ msg: 'Unauthorized 1' })

    const decoded = jwt.verify(token, SECRET_KEY)

    const user = await User.findOne({
      key: 'id',
      value: decoded.userId,
    })

    // if (!user || user.refresh_token !== token) {
    //   return res.status(401).json({ msg: 'Unauthorized 2' })
    // }

    res.json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Internal server error')
=======
    if (!token) return res.status(401).json({ msg: 'Unauthorized' }) // Unauthorized if no token provided

    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET || 'qwerttyuio12345asdfghjkl67890zxcvbnm',
    )

    const user = await Users.findOne({
      where: {
        id: decoded.userId,
        refresh_token: token, // Verify token existence in the database
      },
    })

    if (!user) {
      return res.status(401).json({ msg: 'Unauthorized' }) // Unauthorized if token not found in database
    }

    res.json(user) // Return the user details
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Internal Server Error')
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
  }
}

export const Logout = async (req, res) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
<<<<<<< HEAD
    if (!token) return res.status(204).json({ msg: 'No token provided' })

    const user = await User.findOne({ key: 'refresh_token', value: token })
=======
    if (!token) return res.status(204).json({ msg: 'No token provided' }) // No content if no token

    const user = await Users.findOne({
      where: {
        refresh_token: token,
      },
    })
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5

    if (!user) {
      return res
        .status(204)
<<<<<<< HEAD
        .json({ msg: 'User not found or already logged out' })
    }

    await User.update(user.id, { refresh_token: null })

    res.status(200).json({ msg: 'Logout successful' })
  } catch (error) {
    console.log('Logout error:', error.message)
    res.status(500).json({ msg: 'Internal server error' })
=======
        .json({ msg: 'User not found or already logged out' }) // No content if user not found
    }

    await Users.update(
      { refresh_token: null },
      {
        where: {
          id: user.id,
        },
      },
    )

    return res.status(200).json({ msg: 'Logout successful' })
  } catch (error) {
    console.log('Logout error:', error.message)
    return res.status(500).json({ msg: 'Internal server error' })
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
  }
}

export const updateUsersWithToken = async (req, res) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
<<<<<<< HEAD
    if (!token) return res.status(401).json({ msg: 'Unauthorized' })

    const decoded = jwt.verify(token, SECRET_KEY)

    const user = await User.findOne({ key: 'id', value: decoded.userId })

    if (!user || user.refresh_token !== token) {
      return res.status(401).json({ msg: 'Unauthorized' })
=======
    if (!token) return res.status(401).json({ msg: 'Unauthorized' }) // Unauthorized if no token provided

    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET || 'qwerttyuio12345asdfghjkl67890zxcvbnm',
    )

    const user = await Users.findOne({
      where: {
        id: decoded.userId,
        refresh_token: token, // Verify token existence in the database
      },
    })

    if (!user) {
      return res.status(401).json({ msg: 'Unauthorized' }) // Unauthorized if token not found in database
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
    }

    let fileName = user.image || 'default.png'
    if (req.files && req.files.image) {
<<<<<<< HEAD
      const file = req.files.image
=======
      // Periksa req.files.image
      console.log('File upload detected')

      const file = req.files.image // Akses file sebagai req.files.image
      const fileSize = file.size
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
      const ext = path.extname(file.name)
      fileName = file.md5 + ext

      const allowedType = ['.png', '.jpg', '.jpeg']
      if (!allowedType.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: 'Invalid image type' })
      }
<<<<<<< HEAD
      if (file.size > 5000000) {
=======
      if (fileSize > 5000000) {
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
        return res.status(422).json({ msg: 'Max image size is 5MB' })
      }

      file.mv(`./public/images/${fileName}`, (err) => {
        if (err) {
          console.log('Error moving file:', err.message)
          return res.status(500).json({ msg: err.message })
        }
<<<<<<< HEAD
      })
=======
        console.log('File uploaded successfully')
      })
    } else {
      console.log('No file upload detected')
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
    }

    const url = `${req.protocol}://${req.get('host')}/images/${fileName}`

    const { name, email, phone, alamat } = req.body

<<<<<<< HEAD
    console.log('alamat', alamat)

    await User.update(user.id, {
      name: name || null,
      username: user.username || null,
      email: email || null,
      phone: phone || null,
      alamat: alamat || null,
      password: user.password || null,
      role: 'user',
      image: fileName || 'default.png',
      url: url || null,
    })
=======
    await Users.update(
      {
        name,
        username: user.username,
        email,
        phone,
        alamat,
        role: 'user',
        image: fileName,
        url: url,
      },
      {
        where: {
          id: user.id,
        },
      },
    )
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5

    res.status(200).json({ msg: 'User updated successfully' })
  } catch (error) {
    console.log('Error updating user:', error.message)
<<<<<<< HEAD
    res.status(500).json({ msg: 'Internal server error' })
  }
}

export const updatepassword = async (req, res) => {
  try {
    const user = await User.findOne({ key: 'email', value: req.body.email })

    const { password } = req.body

    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)

    await User.updatepassword(user.id, {
      password: hashPassword || null,
    })

    res.status(200).json({ msg: 'User updated successfully' })
  } catch (error) {
    console.log('Error updating user:', error.message)
    res.status(500).json({ msg: 'Internal server error' })
=======
    res.status(500).json({ msg: error.message, error: 'Internal server error' })
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
  }
}

export const deleteUser = async (req, res) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
<<<<<<< HEAD
    if (!token) return res.status(401).json({ msg: 'Unauthorized' })

    const decoded = jwt.verify(token, SECRET_KEY)

    const user = await User.findOne({ key: 'id', value: decoded.userId })

    if (!user || user.refresh_token !== token) {
      return res.status(401).json({ msg: 'Unauthorized' })
    }

=======
    if (!token) return res.status(401).json({ msg: 'Unauthorized' }) // Unauthorized if no token provided

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const user = await Users.findOne({
      where: {
        id: decoded.userId,
        refresh_token: token, // Verify token existence in the database
      },
    })

    if (!user) {
      return res.status(401).json({ msg: 'Unauthorized' }) // Unauthorized if token not found in database
    }

    // Optionally remove the user's image
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
    if (user.image && user.image !== 'default.png') {
      const filePath = `./public/images/${user.image}`
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log('Failed to remove image:', err)
        }
      })
    }

<<<<<<< HEAD
    await User.delete(user.id)
=======
    await Users.destroy({
      where: {
        id: user.id,
      },
    })
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5

    res.status(200).json({ msg: 'User deleted successfully' })
  } catch (error) {
    console.log(error.message)
<<<<<<< HEAD
    res.status(500).json({ msg: 'Internal server error' })
=======
    res.status(500).json({ msg: error.message })
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
  }
}
