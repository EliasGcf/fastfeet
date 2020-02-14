import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

class DeliveryController {
	async store(req, res) {
		const schema = Yup.object().shape({
			product: Yup.string().required(),
			recipient_id: Yup.number().required(),
			deliveryman_id: Yup.number().required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'validation fails' });
		}

		const { product, recipient_id, deliveryman_id } = req.body;

		/*
		 * Check if recipient exists
		 */
		const recipientExists = await Recipient.findByPk(recipient_id);

		if (!recipientExists) {
			return res.status(400).json({ error: 'Recipient does not exists' });
		}

		/*
		 * Check if recipient exists
		 */
		const deliveryman = await Deliveryman.findByPk(deliveryman_id);

		if (!deliveryman) {
			return res.status(400).json({ error: 'Delivery man does not exists' });
		}

		const {
			id,
			signature_id,
			start_date,
			end_date,
			canceled_at,
		} = await Delivery.create({
			product,
			recipient_id,
			deliveryman_id,
		});

		return res.json({
			id,
			product,
			recipient_id,
			deliveryman_id,
			signature_id,
			start_date,
			end_date,
			canceled_at,
		});

		// Enviar email para o entregador
	}

	async index(req, res) {
		const deliveries = await Delivery.findAll({
			attributes: ['id', 'product', 'start_date', 'end_date', 'canceled_at'],
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
		});

		return res.json(deliveries);
	}
}

export default new DeliveryController();
