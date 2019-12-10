const express = require("express");
let db = require("../../data/db");

const router = express.Router();
// GET request to /api/users
router.get("/", (req, res) => {
  db.find()
    .then(data => {
      if (!data) {
        return res.status(404).json({
          errorMessage: "There are no users in the database"
        });
      }

      res.status(200).json(data);
    })
    .catch(() => {
      return res
        .status(500)
        .json({ error: "The user information could not be accessed." });
    });
});

// GET request to /api/users/:id
router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
      res.status(200).json(user);
    })
    .catch(() => {
      return res
        .status(500)
        .json({ error: "The user information could not be modified." });
    });
});

// POST request to /api/users
router.post("/", (req, res) => {
  if (!req.body.name || !req.body.bio) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }

  const newUser = {
    name: req.body.name,
    bio: req.body.bio,
    created_at: Date.now(),
    updated_at: Date.now()
  };

  db.insert(newUser)
    .then(user => {
      res
        .status(200)
        .json({ addedUser: newUser, message: "You added a user!" });
    })
    .catch(() => {
      return res
        .status(500)
        .json({ error: "The user information could not be added." });
    });
});

// DELETE request to /api/users/:id
router.delete("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
      db.remove(req.params.id).then(i => res.status(200).json(user));
    })
    .catch(() => {
      return res
        .status(500)
        .json({ error: "The user information could not be modified." });
    });
});

// PUT request to /api/users/:id
router.put("/:id", (req, res) => {
  if (!req.body.name || !req.body.bio) {
    return res
      .status(400)
      .json({ message: "Please provide a name and a bio for the user" });
  }

  db.update(req.params.id, req.body)
    .then(user => {
      return user !== 0
        ? // @ts-ignore
          // @ts-ignore
          res.status(200).json({ ...user, ...req.body, updated_at: Date.now() })
        : res.status(404).json({ message: "That user does not exist!" });
    })
    .catch(() => {
      return res
        .status(500)
        .json({ error: "The user information could not be modified." });
    });
});

module.exports = router;