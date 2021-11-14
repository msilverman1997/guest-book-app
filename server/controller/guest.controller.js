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
        res.status(200).json({guest: data});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

exports.findAll = (req, res) => {
    Guest.findAll().then(data => {
        res.status(200).json({guests: data});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Guest.findByPk(id).then(result => {
        return Guest.destroy({
            where: {id: id}
        }).then(num => {
            if(num == 1){
                res.status(200).json({message: "Guest Deleted Successfully", guest: result});
            }
            else{
                res.send({
                    message: "Failed to delete guest"
                });
        }})
        .catch(err => {
            res.status(500).send({
                message: "Could not delete guest with id " + id
            });
        });;
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not find guest with id " + id
        });
    });;
    
}