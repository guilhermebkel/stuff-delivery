'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
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
			email: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false
			},
			admin: {
				type: Sequelize.DataTypes.BOOLEAN,
				allowNull: false,
        defaultValue: false
      },
      encrypted_password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
