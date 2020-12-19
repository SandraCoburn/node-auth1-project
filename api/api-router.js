// const bcrypt = require("bcryptjs");
const router = require("express").Router();

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const restricted = require("../auth/restricted-middleware");

router.use("/auth", authRouter);
router.use("/users", restricted, usersRouter);

// router.get("/hash", (req, res) => {
//   //read the authentication header:
//   const authentication = req.headers.authentication;

//   //hash the value from that header:
//   const hash = bcrypt.hashSync(authentication, 12);

//   res.json({ originalValue: authentication, hasedValue: hash });
// });

// router.get("/", (req, res) => {
//   res.json({ api: "It's running!" });
// });

module.exports = router;
