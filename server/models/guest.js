module.exports = (sequelize, Sequelize) => {
    const Guest = sequelize.define("guest", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    });

    return Guest;
}