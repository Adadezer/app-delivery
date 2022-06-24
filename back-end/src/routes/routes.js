const loginRouter = require('./login.routes');
const registerRouter = require('./register.routes');
const customerRouter = require('./customer.routes');
const sellerRouter = require('./seller.routes');
const userRoutes = require('./users.routes');

module.exports = {
  loginRouter,
  registerRouter,
  customerRouter,
  sellerRouter,
  userRoutes,
};
