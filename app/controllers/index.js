const db = require("../models");
const Receipts = db.receipts;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {  
  if (!req.body.user_id) {
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  const receipt = {
    user_id: req.body.user_id,
    tag_id: req.body.tag_id,
    store_info: req.body.store_info,
    transaction_time: req.body.transaction_time,
    receipt_id_no: req.body.receipt_id_no,
    content: req.body.content,
    total: req.body.total,
    payment_id: req.body.payment_id,
  };

  Receipts.create(receipt)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create the Notes",
      });
    });
};

// exports.findAll = (req, res) => {
//   const title = req.query.title;

//   Receipts.findAll()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occured while retrieving Notes",
//       });
//     });
// };

// exports.findOne = (req, res) => {
//   const id = req.params.id;
//   Receipts.findByPk(id)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving Notes with id=" + id,
//       });
//     });
// };

// exports.update = (req, res) => {
//   const id = req.params.id;

//   Receipts.update(req.body, {
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

//   Receipts.destroy({
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
