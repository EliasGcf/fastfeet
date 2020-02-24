import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
// import File from '../models/File';

import Queue from '../../lib/Queue';
import CancelationDeliveryMail from '../jobs/CancelationDeliveryMail';

import DeliveryProblem from '../schemas/DeliveryProblem';

class DeliveryProblemController {
	async store(req, res) {
		const schema = Yup.object().shape({
			description: Yup.string().required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'validation fails' });
		}

		const { id } = req.params;

		const delivery = await Delivery.findByPk(id);

		if (!delivery) {
			return res.status(400).json({ error: 'Delivery does not exists' });
		}

		if (!delivery.start_date) {
			return res
				.status(400)
				.json({ error: 'This delivery has not been withdrawn' });
		}

		const { description } = req.body;

		const deliveryProblem = await DeliveryProblem.create({
			delivery_id: id,
			description,
		});

		return res.json(deliveryProblem);
	}

	async index(req, res) {
		const deliveryProblems = await DeliveryProblem.find();

		/* const filterDeliveryId = [
			...new Set(deliveryProblems.map(delivery => delivery.delivery_id)),
		];

		const deliveries = await Promise.all(
			filterDeliveryId.map(async delivery_id =>
				Delivery.findByPk(delivery_id, {
					attributes: [
						'id',
						'product',
						'start_date',
						'end_date',
						'canceled_at',
					],
					include: [
						{
							model: Recipient,
							as: 'recipient',
							attributes: ['id', 'name'],
						},
						{
							model: Deliveryman,
							as: 'deliveryman',
							attributes: ['id', 'name'],
						},
						{
							model: File,
							as: 'signature',
							attributes: ['id', 'url', 'path'],
						},
					],
				})
			)
		); */

		return res.json(deliveryProblems);
	}

	async show(req, res) {
		const { id } = req.params;

		const delivery = await Delivery.findByPk(id);

		if (!delivery) {
			return res.status(400).json({ error: 'Delivery does not exists' });
		}

		const deliveryProblems = await DeliveryProblem.find({ delivery_id: id });

		return res.json(deliveryProblems);
	}

	async destroy(req, res) {
		const { id } = req.params;

		const { delivery_id, description } = await DeliveryProblem.findById(id);

		const delivery = await Delivery.findByPk(delivery_id, {
			include: [
				{
					model: Deliveryman,
					as: 'deliveryman',
					attributes: ['id', 'name', 'email'],
				},
				{
					model: Recipient,
					as: 'recipient',
				},
			],
		});

		await delivery.update({ canceled_at: new Date(), status: 'CANCELADA' });
		await DeliveryProblem.findByIdAndDelete(id);

		await Queue.add(CancelationDeliveryMail.key, {
			deliveryman: delivery.deliveryman,
			description,
			recipient: delivery.recipient,
			product: delivery.product,
		});

		return res.json({});
	}
}

export default new DeliveryProblemController();
