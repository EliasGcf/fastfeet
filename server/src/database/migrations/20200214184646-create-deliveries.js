const Sequelize = require('sequelize');

module.exports = {
	up: queryInterface => {
		return queryInterface.createTable('deliveries', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			product: {
				// Nome do produto
				type: Sequelize.STRING,
				allowNull: false,
			},
			recipient_id: {
				// Referência ao destinatário
				type: Sequelize.INTEGER,
				references: { model: 'recipients', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNull: false,
			},
			deliveryman_id: {
				// Referência ao entregador
				type: Sequelize.INTEGER,
				references: { model: 'deliverymen', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNull: false,
			},
			signature_id: {
				// Referência à uma assinatura do destinatário, que será uma imagem
				type: Sequelize.INTEGER,
				references: { model: 'files', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNull: true,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			canceled_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			start_date: {
				// Data de retirada
				type: Sequelize.DATE,
				allowNull: true,
			},
			end_date: {
				// Data de entrega ao destinatário
				type: Sequelize.DATE,
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('deliveries');
	},
};
