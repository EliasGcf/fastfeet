import * as Yup from 'yup';

import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';
import File from '../models/File';

class DeliverymenController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string()
				.email()
				.required(),
			avatar_id: Yup.string().notRequired(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'validation fails' });
		}

		const { name, email, avatar_id } = req.body;

		const deliverymanExists = await Deliveryman.findOne({ where: { email } });

		/*
		 * Check if delivery man already exists in database
		 */
		if (deliverymanExists) {
			return res.status(400).json({ error: 'Delivery man already exists' });
		}

		const { id } = await Deliveryman.create({ name, email, avatar_id });

		return res.json({ id, name, email, avatar_id });
	}

	async show(req, res) {
		const { id } = req.params;

		const deliveryman = await Deliveryman.findByPk(id, {
			attributes: ['id', 'name', 'email', 'created_at'],
			include: [
				{
					model: File,
					as: 'avatar',
					attributes: ['id', 'path', 'url'],
				},
			],
		});

		if (!deliveryman) {
			return res.status(400).json({ error: 'Delivery man does not exists' });
		}

		return res.json(deliveryman);
	}

	async index(req, res) {
		const { q: deliverymanName, page = 1 } = req.query;

		const response = deliverymanName
			? await Deliveryman.findAll({
					where: {
						name: {
							[Op.iLike]: `${deliverymanName}%`,
						},
					},
					order: ['id'],
					attributes: ['id', 'name', 'email'],
					include: [
						{
							model: File,
							as: 'avatar',
							attributes: ['id', 'path', 'url'],
						},
					],
			  })
			: await Deliveryman.findAll({
					attributes: ['id', 'name', 'email'],
					order: ['id'],
					limit: 5,
					offset: (page - 1) * 5,
					include: [
						{
							model: File,
							as: 'avatar',
							attributes: ['id', 'path', 'url'],
						},
					],
			  });

		return res.json(response);
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string()
				.email()
				.required(),
			avatar_id: Yup.number().notRequired(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'validation fails' });
		}

		const { name, email, avatar_id } = req.body;

		/*
		 * Check if avatar_id exists in database
		 */
		if (avatar_id) {
			const avatarExists = await File.findByPk(avatar_id);

			if (!avatarExists) {
				return res.status(400).json({ error: 'File does not exists' });
			}
		}

		/*
		 * Check if delivery man exists in database
		 */
		const { id } = req.params;

		const deliveryman = await Deliveryman.findByPk(id);

		if (!deliveryman) {
			return res.status(400).json({ error: 'Delivery man does not exists' });
		}

		/*
		 * Check if exists an other delivery man with the same email
		 */
		if (email !== deliveryman.email) {
			const deliverymanExists = await Deliveryman.findOne({ where: { email } });

			if (deliverymanExists) {
				return res.status(400).json({ error: 'User already exists.' });
			}
		}

		await deliveryman.update({ name, email, avatar_id });

		const { avatar } = await Deliveryman.findByPk(id, {
			include: [
				{
					model: File,
					as: 'avatar',
					attributes: ['id', 'path', 'url'],
				},
			],
		});

		return res.json({ id, name, email, avatar });
	}

	async destroy(req, res) {
		const { id } = req.params;

		const deliveryman = await Deliveryman.findByPk(id);

		if (!deliveryman) {
			return res.status(400).json({ error: 'Delivery man does not exists' });
		}

		const delivery = await Delivery.findOne({
			where: { deliveryman_id: id, end_date: null },
		});

		if (delivery) {
			return res
				.status(400)
				.json({ error: "This Delivery man can't be deleted" });
		}

		await deliveryman.destroy();

		return res.json({});
	}
}

export default new DeliverymenController();
