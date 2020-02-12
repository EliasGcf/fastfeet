require('dotenv/config');

module.exports = {
	dialect: process.env.DB_DIALECT || 'postgres',
	host: process.env.DB_HOST || 'localhost',
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	define: {
		timestamps: true,
		underscored: true,
		undercoredAll: true,
	},
};
