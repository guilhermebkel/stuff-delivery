'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("delivery_tracks", {
      id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: true
			},
			user_id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "users",
					key: "id"
				}
			},
			tracking_code: {
				type: Sequelize.DataTypes.STRING,
				allowNull: true
			}
    }, {
      indexes: [
				{ fields: ["user_id"] },
				{ fields: ["tracking_code"] }
			]
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("delivery_tracks");
  }
};
