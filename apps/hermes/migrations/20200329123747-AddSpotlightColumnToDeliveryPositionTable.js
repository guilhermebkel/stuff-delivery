'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'delivery_positions',
      'spotlight',
      {
				type: Sequelize.DataTypes.BOOLEAN,
				defaultValue: false
			}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('delivery_positions', 'spotlight')
  }
};
