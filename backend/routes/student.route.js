let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

let studentSchema = require("../models/Student");

router.post("/create-student", (req, res) => {
  studentSchema.create(req.body)
    .then(function (data) {
      console.log(data)
      res.json(data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

router.get("/", async (req, res) => {
  const student = await studentSchema.find({});
  if(student) {
    res.json(student);
  } else {
    console.log(error);
  }
});

router.route("/update-student/:id")
  .get((req, res) => {
    studentSchema.findById(req.params.id)
    .then(function (data) {
      res.json(data);
    })
    .catch (function (err) {
      console.log(err);
    })
  })

  .put((req, res) => {
    studentSchema.findByIdAndUpdate(
        req.params.id, {
          $set: req.body,
        })
      .then(function (data) {
        res.json(data);
        console.log("Student updated successfully!");
      })
      .catch (function (err) {
      console.log(err);
    })
  });

router.delete("/delete-student/:id", (req, res) => {
  studentSchema.findByIdAndRemove(req.params.id)
    .then(function (data) {
      res.status(200).json({
        msg: data,
      })
    })
    .catch(function (err) {
      console.log(err);
    })
});

module.exports = router;