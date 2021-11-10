const db = require("../models");
const Guest = db.guests
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const guest = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        message: req.body.message
    };

    Guest.create(guest).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

exports.findAll = (req, res) => {
    Guest.findAll().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

exports.delete = (req, res) => {
    const id = req.body.id;

    Guest.destroy({
        where: {id: id}
    }).then(num => {
        if(num == 1){
            res.send({
                message: "Guest Deleted Successfully"
            });
        }
        else{
            res.send({
                message: "Failed to delete guest"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete guest with id " + id
        });
    });
}