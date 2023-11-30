const express = require('express');
const { createUser, authUser } = require('../service/user.service');
const createToken = require('../helper/jwt')
const buildresponse = require('../helper/buildResponse')
const { isValidUserBody } = require('../helper/validation')
const route = express.Router();

route.post('/reg', isValidUserBody, async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd)
        buildresponse(res, 200, data)
    } catch (error) {
        buildresponse(res, 404, error.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
      const { email, pwd } = req.body;
      const data = await authUser(email, pwd);
      const token = createToken(data)
      res.setHeader('authorization', [token])
      buildresponse(res, 200, data);
    } catch (error) {
      buildresponse(res, 404, error.message);
    }
  });

module.exports = route;