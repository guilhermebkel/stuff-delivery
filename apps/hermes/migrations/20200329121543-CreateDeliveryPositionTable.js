'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("delivery_positions", {
      id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			delivery_id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "deliveries",
					key: "id"
				}
			},
			latitude: {
				type: Sequelize.DataTypes.FLOAT,
				allowNull: true
			},
			longitude: {
				type: Sequelize.DataTypes.FLOAT,
				allowNull: true
			},
			spotlight: {
				type: Sequelize.DataTypes.BOOLEAN,
				defaultValue: false
			}
    }, {
      indexes: [
				{ fields: ["delivery_id"] }
			]
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("delivery_positions");
  }
};
