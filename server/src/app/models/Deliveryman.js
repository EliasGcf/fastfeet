import Sequelize, { Model } from 'sequelize';

class Deliveryman extends Model {
	// Entregador
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
			},
			{
				sequelize,
				tableName: 'deliverymen',
				paranoid: true,
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
	}
}

export default Deliveryman;
