// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');

faker.locale = 'pt_BR';

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'deliverymen',
			[
				{
					name: faker.name.findName(),
					email: faker.internet.email(),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: faker.name.findName(),
					email: faker.internet.email(),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: faker.name.findName(),
					email: faker.internet.email(),
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('deliverymen', null, {});
	},
};
