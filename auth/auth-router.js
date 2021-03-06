const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then((saved) => {
      req.session.loggedIn = true;
      res.status(201).json(saved);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      console.log("user", user);
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.loggedIn = true;
        req.session.username = user.username;
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({
          you: "can check out any time you like, but you can never leave",
        });
      } else {
        res.status(200).json({ you: "logged out successfully" });
      }
    });
  } else {
    res.status(200).json({ message: `Bye` });
  }
});

module.exports = router;
