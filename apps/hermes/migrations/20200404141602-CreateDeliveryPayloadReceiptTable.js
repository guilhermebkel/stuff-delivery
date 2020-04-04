'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("delivery_payload_receipts", {
      id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			delivery_payload_id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "delivery_payloads",
					key: "id"
				}
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false
			},
			path: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false
			}
    }, {
      indexes: [
				{ fields: ["delivery_payload_id"] },
			]
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("delivery_payload_receipts");
  }
};
