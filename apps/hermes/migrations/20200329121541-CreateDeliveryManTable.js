'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("delivery_men", {
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
			phone_number: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false
			}
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("delivery_men");
  }
};
