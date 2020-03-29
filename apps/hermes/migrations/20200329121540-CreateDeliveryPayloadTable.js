'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("delivery_payloads", {
      id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false
			},
			tracking_code: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false
			},
			weight: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false
			},
			sender: {
				type: Sequelize.DataTypes.JSONB,
				allowNull: false
			},
			receiver: {
				type: Sequelize.DataTypes.JSONB,
				allowNull: false
			},
			payload_dimensions: {
				type: Sequelize.DataTypes.JSONB,
				allowNull: false
			}
    }, {
      indexes: [
        { unique: true, fields: ["tracking_code"] }
			]
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("delivery_payloads");
  }
};
