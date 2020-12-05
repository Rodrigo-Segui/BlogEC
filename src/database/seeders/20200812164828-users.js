"use strict";

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            "users",
            [
                {
                    name: "Pampec",
                    lastName: "Jr",
                    createdAt: "07/05/2020 16:58",
                    updatedAt: "07/05/2020 16:58",
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete("users", null, {}),
};
