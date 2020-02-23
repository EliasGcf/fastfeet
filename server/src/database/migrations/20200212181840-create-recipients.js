const Sequelize = require('sequelize');

module.exports = {
	up: queryInterface => {
		return queryInterface.createTable('recipients', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			street: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			number: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			complement: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			state: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			zip_code: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			deleted_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('recipients');
	},
};
