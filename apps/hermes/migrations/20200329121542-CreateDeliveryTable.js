'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("deliveries", {
      id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			delivery_man_id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "delivery_men",
					key: "id"
				}
			},
			delivery_payload_ids: {
				type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.INTEGER),
				allowNull: true
			},
			delivered: {
				type: Sequelize.DataTypes.BOOLEAN,
				defaultValue: false
			}
    }, {
      indexes: [
				{ fields: ["delivery_man_id"] },
				{ fields: ["delivery_payload_ids"] }
			]
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("deliveries");
  }
};
