import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

import Mail from '../../lib/Mail';

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

		await Mail.sendMail({
			to: `${deliveryman.name} <${deliveryman.email}>`,
			subject: 'Nova entrega cadastrada',
			template: 'CreateDelivery',
			context: {
				deliveryman: deliveryman.name,
				product,
				recipient: recipientExists.name,
				city: recipientExists.city,
				state: recipientExists.state,
				street: recipientExists.street,
				number: recipientExists.number,
				zip_code: recipientExists.zip_code,
			},
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

	async update(req, res) {
		const schema = Yup.object().shape({
			product: Yup.string().notRequired(),
			recipient_id: Yup.number().notRequired(),
			deliveryman_id: Yup.number().notRequired(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'validation fails' });
		}

		const { id } = req.params;

		/*
		 * Check if delivery exists
		 */
		const delivery = await Delivery.findByPk(id);

		if (!delivery) {
			return res.status(400).json({ error: 'Delivery does not exists' });
		}

		const { product, recipient_id, deliveryman_id } = req.body;

		await delivery.update({ product, recipient_id, deliveryman_id });

		return res.json({});

		/*
		 * Check if req.body have start_date
		 */
		// if (req.body.start_date) {
		// 	const { start_date } = req.body;

		// 	/*
		// 	 * Check if the hours is between 8h and 18h
		// 	 */
		// 	if (
		// 		isAfter(parseISO(start_date), setHours(new Date(), 8)) &&
		// 		isBefore(parseISO(start_date), setHours(new Date(), 18))
		// 	) {
		// 		await delivery.update({ start_date });
		// 		return res.json({});
		// 	}

		// 	return res.status(400).json({ error: 'Invalid time' });
		// }

		// /*
		//  * Check if req.body have signature_id
		//  */
		// if (req.body.signature_id) {
		// 	const signature_id = req.body;

		// 	await delivery.update({ signature_id, end_date: new Date() });
		// 	return res.json({});
		// }
	}

	async destroy(req, res) {
		const { id } = req.params;

		/*
		 * Check if delivery exists
		 */
		const delivery = await Delivery.findByPk(id);

		if (!delivery) {
			return res.status(400).json({ error: 'Delivery does not exists' });
		}

		/*
		 * Checks if delivery was got
		 */
		if (delivery.start_date) {
			return res.status(400).json({ error: 'This Delivery already been sent' });
		}

		await delivery.destroy();

		return res.json({});
	}
}

export default new DeliveryController();
