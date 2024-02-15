const db = require("../config/db");

const getData = async () => {
  try {
    const studentRef = await db.collection("student");
    let data;
    let studentData = studentRef.get().then((result) => {
      data = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    });
    return studentData;
  } catch (error) {
    return [];
  }
};

const addData = async (studentData) => {
  try {
    const studentRef = await db.collection("student").doc();
    const student = await studentRef.set(studentData);
    return student;
  } catch (error) {
    return [];
  }
};

const findById = async (id) => {
  try {
    const studentRef = db.collection("student").doc(id);
    const doc = await studentRef.get();
    if (!doc) {
      console.log("No such document!");
    }
    return doc;
  } catch (error) {
    return [];
  }
};

const updateData = async (updateStudent, id) => {
  try {
    const studentRef = db.collection("student").doc(id)
    let message; 
    await studentRef.update(updateStudent).then(()=>{
        message = { status: "SUCCESS", message: "Update data successfully" }
    }).catch((error)=>{
      message = { status: "FAILURE", message: "Record not found" }
    })
    return message
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (id) => {
  try {
    const studentRef = db.collection("student").doc(id);
    let message;
    await studentRef.delete().then(()=>{
      message = { status: "SUCCESS", message: "Delete data successfully" }
  }).catch((error)=>{
    message = { status: "FAILURE", message: "Record not found" }
  })
  return message
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getData, addData, findById, updateData, deleteData };
