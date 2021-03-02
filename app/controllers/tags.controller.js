const db = require("../models");
const Tags = db.tags;

exports.create = (req, res) => { 
  if (!req.body.name) {
    res.json({ 
      status: "FAIL",
      message: "標籤名稱不得為空",
      data: null
    });
    return;
  }

  const tag = {
    name: req.body.name,
  };

  Tags.create(tag)
    .then((data) => {
      res.json({ 
        status: "SUCCESS",
        message: "標籤建立成功",
        data: data
      });
    })
    .catch((err) => {
      res.json({ 
        status: "FAIL",
        message:  err.message || "標籤建立失敗",
        data: data
      });
    });
};

exports.findAll = (req, res) => {
  Tags.findAll()
    .then((data) => {
      res.json({ 
        status: "SUCCESS",
        message: "列出所有標籤成功",
        data: data
      });
    })
    .catch((err) => {
      res.json({ 
        status: "FAIL",
        message:  err.message || "列出所有標籤失敗",
        data: data
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tags.findByPk(id)
    .then((data) => {
    if (!data) data = "無此標籤";
      res.json({ 
        status: "SUCCESS",
        message: "查找標籤成功",
        data: data
      });
    })
    .catch((err) => {
      res.json({ 
        status: "FAIL",
        message:  "查找標籤失敗",
        data: data
      });
    });
};

// exports.update = (req, res) => {
//   const id = req.params.id;

//   Tags.update(req.body, {
//     where: { id: id },
//   }).then((data) => {
//     if (data) {
//       res.send({
//         message: "Note was updated successfully",
//       });
//     } else {
//       res.send({
//         message: `Cannot update Note with id=${id}`,
//       });
//     }
//   });
// };

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Tags.destroy({
//     where: { id: id },
//   }).then((data) => {
//     if (data) {
//       res.send({
//         message: "Note was delete successfully!",
//       });
//     } else {
//       res.send({
//         message: `Cannot delete Note with id=${id}`,
//       });
//     }
//   });
// };
