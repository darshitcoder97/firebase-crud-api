const studentService = require("../services/studentservice");

const { validationResult } = require("express-validator");

module.exports = {
  add: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .send({ status: "FAILURE", message: "Please enter all detail" });
      }
      const studentData = req.body;

      const result = studentService.addData(studentData);
      if (!result)
        return res
          .status(200)
          .send({ status: "FAILURE", message: "Internal Server Error" });
      res
        .status(500)
        .send({ status: "SUCCESS", message: "Insert data successfull" });
    } catch (error) {
      res
        .status(500)
        .send({ status: "FAILURE", message: "Internal Server Error" });
    }
  },
  list: async (req, res) => {
    try {
      const studentData = await studentService.getData();
      res.status(200).send(studentData);
    } catch (error) {
      res
        .status(500)
        .send({ status: "FAILURE", message: "Internal Server Error" });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const studentData = await studentService.findById(id);
      if (!studentData.exists) {
        res
          .status(500)
          .send({ status: "FAILURE", message: "Record not found" });
      }
      res.status(200).send({ ...studentData.data(), id: studentData.id });
    } catch (error) {
      res
        .status(500)
        .send({ status: "FAILURE", message: "Internal Server Error" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updateStudent = req.body;
      const result = await studentService.updateData(updateStudent, id);
      return res.status(200).send(result);
    } catch (error) {
      res
        .status(500)
        .send({ status: "FAILURE", message: "Internal Server Error" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await studentService.deleteData(id);
      res.status(200).send(result);
    } catch (error) {
      res
        .status(500)
        .send({ status: "FAILURE", message: "Internal Server Error" });
    }
  },
};
